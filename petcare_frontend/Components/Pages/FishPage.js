import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import fishImage from '../Images/Fish2.jpg';

import goldfishImage from '../PetTypes/fishtype1.jpg';
import bettaImage from '../PetTypes/fishtype2.webp';
import guppyImage from '../PetTypes/fishtype3.webp';
import angelfishImage from '../PetTypes/fishtype4.avif';
import neonTetraImage from '../PetTypes/fishtype5.jpg';
import clownfishImage from '../PetTypes/fishtype6.jpg';
import oscarImage from '../PetTypes/fishtype7.webp';
import discusImage from '../PetTypes/fishtype8.webp';
import mollyImage from '../PetTypes/fishtype9.webp';
import platyImage from '../PetTypes/fishtype10.jpg';

const imageStyle = {
  width: '500px',
  height: 'auto',
  borderRadius: '8px',
};

const FishPage = () => {
  return (
    <Container sx={{ pt: 8, pb: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ color: '#FF6F61', mb: 4, fontSize: '2.5rem' }}>
        Comprehensive Fish Care Guide
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img src={fishImage} alt="Fish" style={{ ...imageStyle, width: '100%' }} />
      </Box>
      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFEBEE' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Essential Fish Care Tips
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          1. **Aquarium Setup**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Choose an appropriately sized aquarium for your fish species, ensuring adequate space for swimming and growth. Use a quality filter to maintain clean water, and cycle the tank before adding fish to establish beneficial bacteria. Include hiding places and plants to mimic a natural environment. Regularly check water parameters like temperature, pH, ammonia, nitrite, and nitrate levels. Perform regular water changes to keep the aquarium clean and healthy.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          2. **Feeding**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Provide a balanced diet suitable for your fish species. Offer high-quality commercial fish foods, supplemented with fresh or frozen foods as needed. Feed small amounts multiple times a day, ensuring all food is consumed within a few minutes to prevent water contamination. Avoid overfeeding, as uneaten food can pollute the water and harm fish health. Observe your fish during feeding to monitor their appetite and behavior.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          3. **Water Quality**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Maintaining high water quality is crucial for fish health. Use a water conditioner to remove chlorine and chloramine from tap water. Regularly test water parameters and perform partial water changes to keep levels stable. Clean the filter regularly to prevent buildup and maintain efficiency. Avoid sudden changes in water temperature or chemistry, as these can stress fish and lead to disease. Keep the aquarium clean and free of excess waste.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          4. **Tank Mates**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Choose compatible tank mates to create a peaceful and balanced aquarium. Research the behavior and compatibility of each fish species before adding them to the tank. Avoid overcrowding, as this can lead to stress, aggression, and poor water quality. Provide adequate space and hiding places for all fish. Monitor fish interactions and be prepared to separate aggressive individuals if necessary. A well-balanced community tank promotes harmony and reduces stress.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
          5. **Health Monitoring**
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
          Regularly observe your fish for signs of illness, such as changes in behavior, appetite, or appearance. Quarantine new fish before adding them to the main tank to prevent the spread of disease. Treat any health issues promptly, following appropriate protocols for your fish species. Maintain a clean and stable environment to reduce the risk of disease. Regular health monitoring ensures early detection and treatment of any issues, keeping your fish healthy and thriving.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4, borderRadius: '8px', boxShadow: 3, backgroundColor: '#FFE0B2' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FF6F61', mb: 3, fontSize: '2rem' }}>
          Types of Fish
        </Typography>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFCCBC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            1. **Goldfish**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={goldfishImage} alt="Goldfish" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Goldfish are popular freshwater fish known for their bright colors and hardy nature. They come in various varieties, such as common goldfish, fancy goldfish, and comet goldfish. Goldfish require a spacious aquarium with good filtration to maintain water quality. They are omnivorous and thrive on a balanced diet of flakes, pellets, and fresh vegetables. Regular water changes and monitoring are essential to keep goldfish healthy.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#E1BEE7' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            2. **Betta**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={bettaImage} alt="Betta" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Betta fish, also known as Siamese fighting fish, are known for their vibrant colors and flowing fins. They are solitary fish and should be housed alone or with non-aggressive tank mates. Bettas require a heated aquarium with clean, warm water. They are carnivorous and should be fed a diet of high-quality pellets or frozen foods. Betta fish thrive with regular water changes and a well-maintained environment.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B3E5FC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            3. **Guppy**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={guppyImage} alt="Guppy" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Guppies are small, colorful freshwater fish that are easy to care for and make great additions to community tanks. They come in a variety of colors and patterns and are livebearers, meaning they give birth to free-swimming young. Guppies thrive in a well-maintained aquarium with a varied diet of high-quality flakes and occasional live or frozen foods. Regular water changes and tank maintenance are essential for their well-being.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#D1C4E9' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            4. **Angelfish**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={angelfishImage} alt="Angelfish" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Angelfish are elegant freshwater fish known for their distinctive shape and long fins. They require a well-planted aquarium with plenty of vertical space for swimming. Angelfish are omnivorous and should be fed a varied diet of high-quality flakes, pellets, and live or frozen foods. They can be kept in groups or pairs, but be mindful of their territorial behavior and provide ample space for all tank mates.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B2DFDB' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            5. **Neon Tetra**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={neonTetraImage} alt="Neon Tetra" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Neon Tetras are small, brightly colored freshwater fish known for their striking blue and red coloration. They are peaceful fish that do well in groups and are ideal for community tanks. Neon Tetras prefer a well-planted aquarium with dim lighting and a soft substrate. They are omnivorous and thrive on a diet of high-quality flakes, micro pellets, and live or frozen foods. Regular water changes and tank maintenance are important for their health.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#C5E1A5' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            6. **Clownfish**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={clownfishImage} alt="Clownfish" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Clownfish are vibrant marine fish known for their orange and white coloration and their symbiotic relationship with sea anemones. They require a marine aquarium with stable water conditions and live rock for hiding and breeding. Clownfish are omnivorous and should be fed a varied diet of high-quality flakes, pellets, and live or frozen foods. They are social fish and can be kept in pairs or small groups.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#FFAB91' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            7. **Oscar**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={oscarImage} alt="Oscar" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Oscars are large, intelligent cichlids known for their vibrant colors and interactive behavior. They require a spacious aquarium with good filtration and a well-maintained environment. Oscars are carnivorous and should be fed a diet of high-quality pellets, live or frozen foods. They are best kept with other large, compatible fish and require regular water changes to maintain water quality.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#F48FB1' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            8. **Discus**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={discusImage} alt="Discus" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Discus fish are known for their striking, disc-shaped bodies and vibrant colors. They require a well-maintained aquarium with stable water conditions and a soft substrate. Discus are sensitive to water quality and require frequent water changes and monitoring. They are omnivorous and should be fed a varied diet of high-quality flakes, pellets, and live or frozen foods. Discus prefer to be kept in groups and need plenty of space to thrive.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#CFD8DC' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            9. **Molly**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={mollyImage} alt="Molly" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Mollies are livebearing fish known for their adaptability and variety of colors. They are easy to care for and make excellent additions to community tanks. Mollies require a well-maintained aquarium with good filtration and a varied diet of high-quality flakes, pellets, and live or frozen foods. They can be kept in groups and are generally peaceful, but be mindful of their size and tank mates.
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, mb: 3, borderRadius: '8px', backgroundColor: '#B2B2B2' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FF6F61', fontSize: '1.5rem' }}>
            10. **Platy**
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <img src={platyImage} alt="Platy" style={imageStyle} />
          </Box>
          <Typography variant="body1" paragraph sx={{ color: '#333', mb: 3, lineHeight: '2', fontSize: '1.2rem' }}>
            Platies are small, colorful freshwater fish that are easy to care for and breed readily in aquarium conditions. They come in a range of colors and patterns and are livebearers. Platies thrive in well-maintained aquariums with a varied diet of high-quality flakes, pellets, and live or frozen foods. They are peaceful fish and can be kept in groups with other compatible species.
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
};

export default FishPage;
