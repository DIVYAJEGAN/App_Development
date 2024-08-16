import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import catImage from '../Images/cat2.webp';

import siameseImage from '../PetTypes/cattype1.jpg';
import persianImage from '../PetTypes/cattype2.png';
import maineCoonImage from '../PetTypes/cattype3.jpg';
import ragdollImage from '../PetTypes/cattype4.jpeg';
import sphynxImage from '../PetTypes/cattype5.webp';
import bengalImage from '../PetTypes/cattype6.jpg';
import britishShorthairImage from '../PetTypes/cattype7.jpg';
import scottishFoldImage from '../PetTypes/cattype8.jpg';
import abyssinianImage from '../PetTypes/cattype9.jpeg';
import birmanImage from '../PetTypes/cattype10.jpg';

const imageStyle = {
  width: '500px',
  height: 'auto',
  borderRadius: '8px',
};

const CatPage = () => {
  return (
    <Container sx={{ pt: 8, pb: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ color: '#FF6F61', mb: 4, fontSize: '2.5rem' }}>
        Comprehensive Cat Care Guide
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src={catImage} alt="Cat" style={{ ...imageStyle, width: '100%' }} />
      </Box>
      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFEBEE' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Essential Cat Care Tips
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          1. **Feeding**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Provide a balanced diet suitable for your cat's age, weight, and health status. High-quality commercial cat foods are formulated to meet their nutritional needs. Fresh water should always be available. Avoid feeding your cat dog food or human foods that can be harmful, such as onions, garlic, and chocolate. Consult your vet for specific dietary advice, especially if your cat has special dietary needs or health issues.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          2. **Grooming**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Regular grooming helps keep your cat's coat in good condition and reduces shedding. Brush short-haired cats weekly, while long-haired breeds may require daily grooming. Bathing is usually not necessary unless your cat gets very dirty or has a skin condition. Regularly check and clean your cat's ears, and trim their nails to prevent overgrowth. Dental care is also important; brush your cat's teeth regularly to prevent dental disease.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          3. **Exercise and Enrichment**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Cats need mental and physical stimulation to stay healthy and happy. Provide toys, scratching posts, and interactive play sessions to keep your cat active. Consider puzzle feeders to challenge your cat mentally. Create vertical spaces, such as cat trees or shelves, for climbing and exploring. Regular playtime helps prevent obesity and reduces behavioral issues. Rotate toys regularly to keep your cat interested and engaged.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          4. **Health Check-ups**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Schedule regular veterinary check-ups to monitor your cat's health and catch any issues early. Keep vaccinations up to date and follow your vet's advice for parasite control. Be observant of any changes in behavior, appetite, or litter box habits, as these can be signs of health problems. Regular dental check-ups are also important to prevent dental disease. Provide a clean and safe living environment to minimize health risks.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          5. **Litter Box Maintenance**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Keep your cat's litter box clean and in a quiet, accessible location. Scoop the litter daily and change it completely on a regular basis. Use unscented litter to avoid irritating your cat's sensitive nose. Provide one litter box per cat, plus one extra, to prevent territorial issues. If your cat starts avoiding the litter box, consult your vet to rule out medical issues or stress. A clean litter box encourages good litter box habits.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFE0B2' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Types of Cats
        </Typography>
        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFCCBC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            1. **Siamese**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={siameseImage} alt="Siamese" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Siamese cats are known for their sleek, elegant appearance and striking blue eyes. They are vocal and social, often forming strong bonds with their owners. Siamese cats are highly intelligent and curious, requiring plenty of mental stimulation and interactive play. Their short coat is easy to groom, needing only occasional brushing. They are generally healthy but can be prone to respiratory issues. Siamese cats thrive on attention and should not be left alone for long periods.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#E1BEE7' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            2. **Persian**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={persianImage} alt="Persian" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Persian cats are known for their long, luxurious coats and sweet, gentle personalities. They are typically calm and affectionate, preferring a serene environment. Persians require daily grooming to prevent their coats from matting. They can be prone to health issues such as respiratory problems and dental disease, so regular vet check-ups are essential. Persians are well-suited to indoor living and enjoy lounging in comfortable spots. They are generally good with children and other pets.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B3E5FC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            3. **Maine Coon**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={maineCoonImage} alt="Maine Coon" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Maine Coons are one of the largest domestic cat breeds, known for their friendly and sociable nature. They are often referred to as "gentle giants" due to their affectionate behavior and good temperament. Maine Coons have a thick, water-resistant coat that requires regular grooming to prevent tangles and mats. They are generally healthy but can be prone to certain genetic conditions, such as hypertrophic cardiomyopathy. Maine Coons enjoy interactive play and are good with children and other pets.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#C8E6C9' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            4. **Ragdoll**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={ragdollImage} alt="Ragdoll" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Ragdoll cats are known for their docile and relaxed nature. They often go limp when picked up, hence the name "Ragdoll." Ragdolls have semi-long fur that requires regular brushing to avoid matting. They are generally healthy but can be prone to certain genetic conditions, such as heart disease. Ragdolls are highly affectionate and enjoy being around people. They are good with children and other pets and adapt well to indoor living.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#D1C4E9' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            5. **Sphynx**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={sphynxImage} alt="Sphynx" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Sphynx cats are known for their lack of fur and distinctive wrinkled skin. Despite their hairlessness, they require regular bathing to remove oils that accumulate on their skin. Sphynx cats are known for their affectionate and social nature. They are highly active and enjoy interactive play and attention. Sphynx cats are generally healthy but can be prone to certain skin conditions. They should be kept warm as they lack a protective coat.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#F0F4C3' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            6. **Bengal**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={bengalImage} alt="Bengal" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Bengal cats are known for their striking leopard-like appearance and energetic personality. They are highly active and require plenty of stimulation and exercise. Bengals have a short, dense coat that is easy to groom. They are intelligent and curious, often getting into mischief if not provided with enough enrichment. Bengals are generally healthy but can be prone to certain genetic conditions, such as heart disease. They enjoy interactive play and are good with families and other pets.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B9FBC0' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            7. **British Shorthair**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={britishShorthairImage} alt="British Shorthair" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            British Shorthair cats are known for their round faces and dense, plush coats. They have a calm and easygoing personality, making them well-suited to various living environments. British Shorthairs are generally low-maintenance, requiring only regular brushing to manage shedding. They are generally healthy but can be prone to certain genetic conditions, such as obesity. British Shorthairs enjoy a relaxed lifestyle and are good with families and other pets.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#DCE775' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            8. **Scottish Fold**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={scottishFoldImage} alt="Scottish Fold" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Scottish Fold cats are known for their distinctive folded ears and sweet, affectionate nature. They are generally healthy but can be prone to certain genetic conditions related to their ear structure. Scottish Folds have a plush coat that requires regular grooming to manage shedding. They are good with families and other pets, enjoying interactive play and attention. Scottish Folds adapt well to indoor living and enjoy a calm environment.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFE082' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            9. **Abyssinian**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={abyssinianImage} alt="Abyssinian" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Abyssinian cats are known for their sleek, short coat and active, playful personality. They are highly intelligent and curious, often engaging in playful activities and exploring their surroundings. Abyssinians have a low-maintenance coat that requires minimal grooming. They are generally healthy but can be prone to certain genetic conditions. Abyssinians enjoy interactive play and are good with families and other pets. They thrive in environments that provide plenty of stimulation and enrichment.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFAB91' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            10. **Birman**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={birmanImage} alt="Birman" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Birman cats are known for their striking blue eyes and elegant, semi-long coat. They are generally affectionate and gentle, making them good companions. Birmans have a coat that requires regular grooming to prevent matting and tangles. They are generally healthy but can be prone to certain genetic conditions. Birmans enjoy interactive play and are good with families and other pets. They adapt well to indoor living and prefer a calm, loving environment.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default CatPage;
