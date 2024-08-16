import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import dogImage from '../Images/Dog2.jpg';
import labradorImage from '../PetTypes/dogtype1.jpg';
import germanShepherdImage from '../PetTypes/dogtype2.webp';
import goldenRetrieverImage from '../PetTypes/dogtype3.avif';
import bulldogImage from '../PetTypes/dogtype4.jpg';
import beagleImage from '../PetTypes/dogtype5.jpg';
import poodleImage from '../PetTypes/dogtype6.jpg';
import boxerImage from '../PetTypes/dogtype7.webp';
import dachshundImage from '../PetTypes/dogtype8.jfif';
import huskyImage from '../PetTypes/dogtype9.avif';
import rottweilerImage from '../PetTypes/dogtype10.png';

const imageStyle = {
  width: '500px',
  height: 'auto',
  borderRadius: '8px',
};

const DogPage = () => {
  return (
    <Container sx={{ pt: 8, pb: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ color: '#FF6F61', mb: 4, fontSize: '2.5rem' }}>
        Comprehensive Dog Care Guide
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src={dogImage} alt="Dog" style={{ ...imageStyle, width: '100%' }} />
      </Box>
      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFEBEE' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Essential Dog Care Tips
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          1. **Feeding**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          A balanced diet is crucial for your dog's health. Provide high-quality dog food that meets their nutritional needs based on age, size, and activity level. Avoid feeding human food that can be harmful, such as chocolate, onions, and grapes. Ensure fresh water is always available. Consult your vet for specific dietary recommendations and adjust portions to maintain a healthy weight. Regularly monitor your dog's eating habits to detect any health issues early.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          2. **Grooming**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Regular grooming keeps your dog's coat healthy and free of tangles. Brush their fur according to their breed's needs, and bathe them periodically. Check and clean their ears to prevent infections. Trim their nails to avoid overgrowth and discomfort. Regularly brush their teeth to maintain oral hygiene and prevent dental issues. Grooming sessions are also a good time to check for any skin problems or parasites.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          3. **Exercise and Training**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Exercise is vital for your dog's physical and mental health. Provide daily walks and playtime to keep them active and engaged. Training helps reinforce good behavior and strengthens your bond. Use positive reinforcement techniques and be consistent with commands. Mental stimulation through interactive toys and puzzles can prevent boredom and destructive behavior. Tailor the exercise routine to your dog's breed and energy levels.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          4. **Health Check-ups**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Regular veterinary check-ups are essential for your dog's well-being. Schedule annual visits to monitor their health, update vaccinations, and address any concerns. Be aware of common signs of illness, such as changes in appetite, behavior, or coat condition. Keep their environment clean to minimize the risk of infections. Follow your vet's advice for preventive care, such as flea and tick treatments. Early detection and treatment of health issues can prolong your dog's life.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          5. **Safety**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Ensure your dog's safety by providing a secure living environment. Keep harmful substances out of reach and ensure they can't access dangerous areas. Use appropriate restraints, such as leashes and harnesses, when outside. Create a comfortable and safe space where they can retreat when stressed. Regularly check your home for potential hazards and make necessary adjustments. Supervise interactions with other pets and children to prevent accidents.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFE0B2' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Types of Dogs
        </Typography>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFCCBC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            1. **Labrador Retriever**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={labradorImage} alt="Labrador Retriever" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Labrador Retrievers are known for their friendly and outgoing nature. They are highly intelligent and excel in various activities, including search and rescue, guide dog work, and therapy. Labs require regular exercise to manage their energy levels and prevent obesity. They have a short, dense coat that sheds seasonally, so regular brushing is needed. Labs are social dogs and thrive on interaction with their families. They are generally good with children and other pets.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#E1BEE7' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            2. **German Shepherd**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={germanShepherdImage} alt="German Shepherd" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            German Shepherds are renowned for their intelligence, loyalty, and versatility. They are commonly used in police and military roles due to their strong work ethic and trainability. German Shepherds need regular mental and physical stimulation to stay happy and healthy. They have a double coat that sheds year-round, requiring frequent grooming. These dogs form strong bonds with their families and are protective, making them excellent guard dogs. Early socialization and training are crucial to ensure they are well-behaved.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B3E5FC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            3. **Golden Retriever**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={goldenRetrieverImage} alt="Golden Retriever" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Golden Retrievers are beloved for their friendly and tolerant nature. They are highly trainable and excel in roles such as service dogs, therapy dogs, and in competitive sports. Golden Retrievers need regular exercise to keep their energy levels in check. Their long, dense coat needs regular grooming to prevent matting and shedding. Golden Retrievers are known for their patience and are generally good with children and other animals. They excel in activities like obedience and agility.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#C5E1A5' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            4. **Bulldog**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={bulldogImage} alt="Bulldog" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Bulldogs are known for their distinctive wrinkled face and muscular build. They are gentle, affectionate, and good with children, making them great family pets. Bulldogs require minimal exercise compared to more active breeds, but they still need regular walks to stay healthy. Their short coat is easy to maintain, but their wrinkles need regular cleaning to prevent infections. Bulldogs are prone to certain health issues, so regular vet check-ups are essential.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#F8BBD0' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            5. **Beagle**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={beagleImage} alt="Beagle" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Beagles are small to medium-sized dogs known for their friendly and curious nature. They have a strong sense of smell and were originally bred for hunting. Beagles require regular exercise to manage their energy and prevent weight gain. Their short coat is easy to groom, but they do shed regularly. Beagles are generally good with children and other pets, but their strong prey drive means they should be kept on a leash or in a secure area when outdoors. Training and socialization are important to manage their independent streak.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#D1C4E9' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            6. **Poodle**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={poodleImage} alt="Poodle" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Poodles are highly intelligent and versatile dogs that come in three sizes: Standard, Miniature, and Toy. They are known for their curly, hypoallergenic coat, which requires regular grooming to prevent matting. Poodles are agile and excel in various dog sports and activities. They are friendly, eager to please, and make excellent companions for families. Regular mental stimulation and exercise are important to keep them happy and well-behaved.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#E0F2F1' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            7. **Boxer**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={boxerImage} alt="Boxer" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Boxers are energetic, playful, and known for their distinctive square build and expressive face. They are excellent family pets due to their affectionate and protective nature. Boxers require regular exercise to burn off their high energy levels. Their short coat is low-maintenance, but they do shed moderately. Boxers are good with children and other pets, and they thrive on companionship and interaction. Early training and socialization are important for managing their exuberance.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B2DFDB' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            8. **Dachshund**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={dachshundImage} alt="Dachshund" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Dachshunds are small, elongated dogs with a spirited and curious personality. They are known for their distinctive appearance and were originally bred for hunting small game. Dachshunds require regular exercise to maintain a healthy weight and avoid back problems, which they are prone to due to their long spine. They have a short coat that needs minimal grooming, but they do shed. Dachshunds are good with children and other pets but can be stubborn, so consistent training is necessary.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFAB91' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            9. **Husky**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={huskyImage} alt="Husky" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Huskies are medium-sized working dogs known for their striking appearance and high energy levels. They have a thick double coat that requires regular grooming, especially during shedding seasons. Huskies are intelligent, but they can be independent and stubborn, requiring consistent training. They are friendly, social dogs that thrive in active households and enjoy regular exercise. Huskies are good with children and other pets, but their strong prey drive means they should be supervised around smaller animals.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#C8E6C9' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            10. **Rottweiler**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={rottweilerImage} alt="Rottweiler" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Rottweilers are powerful, confident, and loyal dogs known for their protective nature. They require regular exercise and mental stimulation to stay happy and healthy. Rottweilers have a short, dense coat that is easy to maintain but sheds moderately. They are generally good with children and other pets if properly socialized, but their strong guarding instincts require firm and consistent training. Rottweilers thrive on structure and routine, making early training and socialization crucial.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default DogPage;
