import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import dogImage from '../Images/Dog1.jpg';  
import catImage from '../Images/cat1.webp';  
import rabbitImage from '../Images/Rabbit1.jpg';  
import fishImage from '../Images/Fish1.jpg';  

const petData = [
  {
    name: 'Dog',
    description: 'Dogs are loyal companions who require consistent care. They need regular exercise, a balanced diet, and routine vet visits. Socialization and training are crucial for a well-behaved dog. Always provide fresh water and a comfortable living space.',
    image: dogImage,
    link: '/dog',
    bgColor: '#FFFAF0',
    borderColor: '#FF6F61',
    textColor: '#3C3C3C'
  },
  {
    name: 'Cat',
    description: 'Cats are independent animals that require less attention compared to dogs but still need regular care. Ensure they have a clean litter box, a balanced diet, and regular vet check-ups. Provide scratching posts and toys to keep them entertained.',
    image: catImage,
    link: '/cat',
    bgColor: '#F0F8FF',
    borderColor: '#8A2BE2',
    textColor: '#2F4F4F'
  },
  {
    name: 'Rabbit',
    description: 'Rabbits need a spacious habitat with plenty of room to hop and play. They require a diet high in hay, fresh vegetables, and clean water. Regular grooming is necessary to prevent matting of their fur. Provide a safe environment free from hazards.',
    image: rabbitImage,
    link: '/rabbit',
    bgColor: '#FFF0F5',
    borderColor: '#DA70D6',
    textColor: '#4B0082'
  },
  {
    name: 'Fish',
    description: 'Maintaining a clean and balanced aquarium is crucial for fish health. Regular water changes and monitoring water quality are essential. Feed fish a varied diet and ensure the aquarium has appropriate filtration and aeration.',
    image: fishImage,
    link: '/fish',
    bgColor: '#E0FFFF',
    borderColor: '#20B2AA',
    textColor: '#006400'
  }
];

const Guide = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom sx={{ color: '#FF6F61', textAlign: 'center', mb: 4 }}>
        In-Depth Pet Care Guide
      </Typography>
      {petData.map((pet, index) => (
        <Box
          key={pet.name}
          sx={{
            backgroundColor: pet.bgColor,
            border: `2px solid ${pet.borderColor}`,
            borderRadius: '8px',
            p: 3,
            mb: 4,
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }}
        >
          <Typography variant="h5" sx={{ color: pet.borderColor, mb: 2 }}>
            {pet.name}
          </Typography>
          <img src={pet.image} alt={pet.name} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '16px' }} />
          <Typography variant="body1" sx={{ color: pet.textColor, mb: 2 }}>
            {pet.description}
          </Typography>
          <Link to={pet.link} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Link>
        </Box>
      ))}
    </Container>
  );
};

export default Guide;
