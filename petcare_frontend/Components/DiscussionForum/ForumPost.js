import React, { useContext } from 'react';
import { ForumContext } from './ForumContext';
import { Button } from '@mui/material';

const ForumPost = ({ post }) => {
    const { deletePost } = useContext(ForumContext);
    const username = localStorage.getItem('username'); // Get the username from localStorage

    const handleDelete = async () => {
        if (post.image) {
            // Extract the image filename from the URL
            const filename = post.image.split('/').pop();

            try {
                await fetch(`http://localhost:5000/delete/${filename}`, {
                    method: 'DELETE'
                });
            } catch (error) {
                console.error('Error deleting image:', error);
                alert('Failed to delete image');
            }
        }

        deletePost(post.id);
    };

    return (
        <div className="forum-post">
            <h3 className="forum-post-title">{post.title}</h3>
            <p className="forum-post-content">{post.content}</p>
            {post.image && <img src={post.image} alt="Post" className="uploaded-image" />}
            <p>Posted by: {post.username}</p>
            {username === post.username && (
                <Button variant="contained" color="secondary" onClick={handleDelete}>
                    Delete
                </Button>
            )}
        </div>
    );
};

export default ForumPost;
