from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import bcrypt
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from models import db, User, ForumPost, Reply
import os
from connection import password, mail

app = Flask(__name__, static_folder='static')
CORS(app)  # Enable CORS to allow requests from the frontend
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'#db connectivty
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    #constructor
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if not user or not bcrypt.checkpw(data['password'].encode('utf-8'), user.password.encode('utf-8')):
        return jsonify({'message': 'Login failed'})
    return jsonify({'message': 'Login successful', 'email': user.email})

@app.route('/api/report', methods=['POST'])
def report():
    data = request.form
    username = data.get('username')
    email = data.get('email')

    if not username or not email:
        return jsonify({'message': 'User is not logged in'}), 401

    photo = request.files['photo']
    address = data.get('address')
    condition = data.get('condition')
    contact = data.get('contact')
    description = data.get('description')
    severity = data.get('severity')

    photo_path = os.path.join(app.static_folder, 'uploads', photo.filename)
    if not os.path.exists(os.path.dirname(photo_path)):
        os.makedirs(os.path.dirname(photo_path))
    photo.save(photo_path)

    send_email(username, email, address, condition, contact, description, severity, photo_path)
    return jsonify({'message': 'Report submitted successfully'})

def send_email(username, email, address, condition, contact, description, severity, photo_path):
    sender_email = mail
    sender_password = password
    receiver_email = mail  # Can be the same as sender_email or different

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = f"New Report Submitted by {username}"

    body = f"""
    A new report has been submitted by {username} ({email}).

    Details:
    Address: {address}
    Condition: {condition}
    Contact: {contact}
    Description: {description}
    Severity: {severity}

    Please take the necessary action.
    """
    message.attach(MIMEText(body, 'plain'))

    with open(photo_path, "rb") as attachment:
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())

    encoders.encode_base64(part)
    part.add_header(
        "Content-Disposition",
        f"attachment; filename= {os.path.basename(photo_path)}",
    )

    message.attach(part)

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = message.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        print("Email sent successfully")
        return jsonify({'message': 'Email sent successfully'})
    except Exception as e:
        print(f"Failed to send email: {e}")
        return jsonify({'message':'Failed to send email'})

@app.route('/api/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404

    new_post = ForumPost(
        title=data['title'],
        content=data['content'],
        image=data.get('image', None),
        user_id=user.id
    )
    db.session.add(new_post)
    db.session.commit()
    return jsonify({'message': 'Post created successfully'})

@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = ForumPost.query.all()
    posts_data = [{
        'id': post.id,
        'title': post.title,
        'content': post.content,
        'image': post.image,
        'username': post.user.username,
        'replies': [{
            'id': reply.id,
            'content': reply.content,
            'username': reply.user.username
        } for reply in post.replies]
    } for post in posts]
    return jsonify(posts_data)

@app.route('/api/posts/<int:post_id>/replies', methods=['POST'])
def create_reply(post_id):
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404

    post = ForumPost.query.get(post_id)
    if not post:
        return jsonify({'message': 'Post not found'}), 404

    new_reply = Reply(
        content=data['content'],
        post_id=post.id,
        user_id=user.id
    )
    db.session.add(new_reply)
    db.session.commit()
    return jsonify({'message': 'Reply created successfully'})

@app.route('/api/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    user = User.query.filter_by(username=request.headers.get('username')).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404

    post = ForumPost.query.get(post_id)
    if not post:
        return jsonify({'message': 'Post not found'}), 404

    if post.user_id != user.id:
        return jsonify({'message': 'Unauthorized action'}), 403

    # Delete associated image if it exists
    if post.image:
        try:
            filename = os.path.basename(post.image)
            file_path = os.path.join(app.static_folder, 'uploads', filename)
            if os.path.exists(file_path):
                os.remove(file_path)
        except Exception as e:
            print(f"Error deleting image: {e}")

    db.session.delete(post)
    db.session.commit()
    return jsonify({'message': 'Post deleted successfully'})

@app.route('/api/delete_image/<filename>', methods=['DELETE'])
def delete_image(filename):
    try:
        file_path = os.path.join(app.static_folder, 'uploads', filename)
        if os.path.exists(file_path):
            os.remove(file_path)
            return jsonify({'message': 'Image deleted successfully'}), 200
        else:
            return jsonify({'message': 'Image not found'}), 404
    except Exception as e:
        print(f"Error deleting image: {e}")
        return jsonify({'message': 'Failed to delete image'}), 500

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
