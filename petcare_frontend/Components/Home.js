import React from 'react';
import { Typography, Button, Grid, Container, Paper, Grow, Fade, Slide, Zoom } from '@mui/material';
import { Link } from "react-router-dom";
import './Styles/Home.css';
import rescueImage from './Images/Animal-Rescue.jpg';
import heroImage from './Images/Help.jpg'; 

const Section = ({ children, bgColor }) => (
  <Paper elevation={3} style={{ padding: '20px', backgroundColor: bgColor, marginBottom: '20px' }}>
    {children}
  </Paper>
);

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        
        <Section bgColor="#e3f2fd">
          <section className="hero">
            <div className="hero-image-container">
              <img src={heroImage} alt="Help Street Pets" className="hero-image" />
            </div>
            <div className="hero-content">
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Typography variant="h3" align="center" gutterBottom>
                  Help Free-Roaming Animals in Need
                </Typography>
              </Slide>
              <Fade in={true} timeout={2000}>
                <Typography variant="body1" align="center" paragraph>
                  Report an incident to get immediate assistance for injured free-roaming animals.
                </Typography>
              </Fade>
              <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Link to="/report">
                  <Button variant="contained" color="primary">
                    Report an Incident
                  </Button>
                </Link>
              </Zoom>
            </div>
          </section>
        </Section>

        <Section bgColor="#ffffff">
          <section className="rescue-process">
            <Container>
              <Typography variant="h3" align="center" gutterBottom>
                Our Rescue Process
              </Typography>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Grow in={true} timeout={2000}>
                    <img src={rescueImage} alt="Rescue Process" className="info-image" />
                  </Grow>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Fade in={true} timeout={3000}>
                    <div>
                      <Typography variant="body1" paragraph>
                        We respond quickly to reports of injured street animals, providing immediate care and transporting them to a veterinary clinic. After treatment, pets are placed in foster homes while we find them permanent, loving families.
                      </Typography>
                      <Typography variant="body1">
                        Our goal is to offer compassionate and efficient care, ensuring every pet has the opportunity for a better life.
                      </Typography>
                    </div>
                  </Fade>
                </Grid>
              </Grid>
            </Container>
          </section>
        </Section>

        <Section bgColor="#f0f4f8">
          <section className="about-us">
            <Container>
              <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <div>
                  <Typography variant="h3" align="center" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body1" align="center" paragraph>
                    We are a dedicated team committed to rescuing and caring for street pets in need. Our mission is to provide immediate medical attention, foster care, and eventually find loving homes for every pet we help.
                  </Typography>
                  <Typography variant="body1" align="center">
                    Through collaborations with local veterinary clinics and shelters, we ensure that every rescued pet receives the best possible care. We believe in a world where every street pet has a chance to live a happy and healthy life.
                  </Typography>
                </div>
              </Slide>
            </Container>
          </section>
        </Section>

        <Section bgColor="#ffffff">
          <section className="contact-us">
            <Container>
              <Zoom in={true} timeout={2000}>
                <div>
                  <Typography variant="h3" align="center" gutterBottom>
                    Contact 
                  </Typography>
                  <Typography variant="body1" align="center" paragraph>
                    We’d love to hear from you! If you have any questions, concerns, or would like to get involved, please reach out to us using the contact details below:
                  </Typography>
                  <Link to="/contact">
                    <Button variant="contained" color="primary">
                      Contact
                    </Button>
                  </Link>
                </div>
              </Zoom>
            </Container>
          </section>
        </Section>
      </div>
    </div>
  );
}

export default Home;
