import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FF6F61 0%, #FF9A8B 100%)',
  padding: '20px 0',
  marginTop: 'auto',
  textAlign: 'center',
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  },
}));

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  marginTop: '10px',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Typography variant="body2">© 2024 PetCare. All Rights Reserved.</Typography>
        <SocialMediaContainer>
          <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" color="inherit">
            <Instagram />
          </IconButton>
        </SocialMediaContainer>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
