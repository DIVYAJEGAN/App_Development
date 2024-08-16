import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import rabbitImage from '../Images/Rabbit2.jpg';

import hollandLopImage from '../PetTypes/rabtype1.jpg';
import lionheadImage from '../PetTypes/rabtype2.webp';
import netherlandDwarfImage from '../PetTypes/rabtype3.jpg';
import miniRexImage from '../PetTypes/rabtype4.jfif';
import angoraImage from '../PetTypes/rabtype5.avif';

import dutchImage from '../PetTypes/rabtype6.jpeg';
import englishSpotImage from '../PetTypes/rabtype7.jfif';
import satinImage from '../PetTypes/rabtype8.jfif';

const imageStyle = {
  width: '500px',
  height: 'auto',
  borderRadius: '8px',
};

const RabbitPage = () => {
  return (
    <Container sx={{ pt: 8, pb: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ color: '#FF6F61', mb: 4, fontSize: '2.5rem' }}>
        Comprehensive Rabbit Care Guide
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src={rabbitImage} alt="Rabbit" style={{ ...imageStyle, width: '100%' }} />
      </Box>
      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFEBEE' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Essential Rabbit Care Tips
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          1. **Housing**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Provide a spacious and comfortable living area for your rabbit. A large, well-ventilated cage or pen with plenty of room to hop and stretch is ideal. Include bedding materials like hay or straw to create a cozy environment. Rabbits also need time outside their cage for exercise and enrichment. Ensure the living area is safe, with no hazards such as exposed wires or toxic plants. Regularly clean the cage to maintain hygiene and prevent odors.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          2. **Diet**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Rabbits require a balanced diet consisting of hay, fresh vegetables, and a small amount of high-quality pellets. Hay should make up the majority of their diet, providing essential fiber for digestive health. Offer a variety of fresh, leafy greens and vegetables daily, avoiding high-sugar or starchy options. Fresh water should always be available. Avoid feeding rabbits foods that are harmful, such as chocolate, caffeine, or sugary treats.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          3. **Grooming**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Regular grooming is essential for your rabbit's health. Brush your rabbit's fur to prevent matting and reduce shedding. Long-haired breeds require more frequent grooming. Check their nails and trim them if necessary to prevent overgrowth. Regularly clean their living area and litter box to maintain cleanliness. Monitor their fur and skin for signs of parasites or abnormalities. Routine grooming helps keep your rabbit comfortable and healthy.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          4. **Socialization**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Rabbits are social animals and thrive on interaction with their human caregivers and other rabbits. Spend time playing and bonding with your rabbit daily. Provide toys and activities to keep them mentally stimulated. If you have multiple rabbits, ensure they are properly introduced and get along well. Avoid sudden changes or stressful situations that could negatively affect their behavior. A well-socialized rabbit is happier and more comfortable in their environment.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          5. **Health Monitoring**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Regular health check-ups are crucial for your rabbit's well-being. Monitor their weight, appetite, and overall behavior. Look out for signs of illness such as changes in eating habits, lethargy, or abnormal feces. Schedule annual veterinary visits for routine exams and vaccinations. Keep an eye on their dental health, as dental issues are common in rabbits. Early detection and treatment of health problems ensure a longer, healthier life for your rabbit.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFE0B2' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Types of Rabbits
        </Typography>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFCCBC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            1. **Holland Lop**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={hollandLopImage} alt="Holland Lop" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Holland Lops are small, friendly rabbits with distinctive lop ears that hang down on either side of their head. They have a compact body and a sweet, gentle temperament. They require regular grooming to maintain their coat and enjoy interaction with their human caregivers. Holland Lops are well-suited for indoor living and make excellent pets for families and individuals.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#E1BEE7' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            2. **Lionhead**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={lionheadImage} alt="Lionhead" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Lionhead rabbits are known for their distinctive mane-like fur around their head, resembling a lion's mane. They are small to medium-sized rabbits with a playful and curious nature. Lionheads require regular grooming to prevent matting and tangling of their fur. They are social animals that enjoy human interaction and make great pets for families.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B3E5FC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            3. **Netherland Dwarf**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={netherlandDwarfImage} alt="Netherland Dwarf" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Netherland Dwarf rabbits are one of the smallest rabbit breeds, known for their tiny size and compact body. They have a lively and inquisitive personality and require regular social interaction and mental stimulation. Their grooming needs are minimal, but they still benefit from regular brushing. Netherland Dwarfs are suitable for indoor living and adapt well to various environments.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#C8E6C9' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            4. **Mini Rex**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={miniRexImage} alt="Mini Rex" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Mini Rex rabbits are known for their velvety, plush fur that is soft to the touch. They are small in size and have a calm, friendly disposition. Regular grooming is necessary to maintain their unique coat texture. Mini Rex rabbits enjoy companionship and are well-suited for both indoor and outdoor living. They make excellent pets for families and individuals alike.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFEBEE' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            5. **Angora**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={angoraImage} alt="Angora" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Angora rabbits are known for their long, luxurious fur that requires frequent grooming. They are medium to large in size and have a gentle, affectionate temperament. Regular brushing is essential to prevent matting and tangling of their coat. Angoras are social animals that thrive with regular interaction and make wonderful pets for those willing to commit to their grooming needs.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFCCBC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            6. **Dutch**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={dutchImage} alt="Dutch" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Dutch rabbits are a popular breed known for their distinctive markings and friendly nature. They are medium-sized rabbits with a robust build and an affectionate personality. Dutch rabbits are relatively low-maintenance in terms of grooming but benefit from regular interaction and exercise. They adapt well to both indoor and outdoor living conditions.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#E1BEE7' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            7. **English Spot**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={englishSpotImage} alt="English Spot" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            English Spot rabbits are known for their distinctive spot patterns and lively personality. They are medium-sized rabbits with a sleek coat and an energetic disposition. Regular grooming is necessary to maintain their coat and prevent matting. English Spots are social animals that enjoy interactive play and make excellent pets for families.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B3E5FC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            8. **Satin**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={satinImage} alt="Satin" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Satin rabbits are known for their unique, glossy fur that has a satin-like sheen. They are medium-sized rabbits with a calm, friendly temperament. Regular grooming is needed to maintain their coat's luster and prevent tangling. Satin rabbits are social and enjoy interactive play, making them great companions for families and individuals.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default RabbitPage;
