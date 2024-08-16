import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FF6F61 0%, #FF9A8B 100%)',
  backdropFilter: 'blur(15px)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: '700',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: '0 8px',
  color: '#FFFFFF',
  borderRadius: '30px',
  padding: '8px 16px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#FF6F61',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: '6px 10px',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
}));

const NavBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileMenu = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'linear-gradient(135deg, #FF6F61 0%, #FF9A8B 100%)', // Same as header gradient
    color: '#FFFFFF',
  },
}));

function Header({ isAuthenticated, onLogin }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('username');
    onLogin(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/report">
          <ListItemText primary="Report" />
        </ListItem>
        <ListItem button component={Link} to="/guide">
          <ListItemText primary="Pet Handbook" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/forum">
          <ListItemText primary="Forum" />
        </ListItem>
        {isAuthenticated ? (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <ListItem button component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Title variant="h6">CareLink Pets</Title>
          <NavBox>
            <StyledLink to="/">
              <NavButton>Home</NavButton>
            </StyledLink>
            <StyledLink to="/report">
              <NavButton>Report</NavButton>
            </StyledLink>
            <StyledLink to="/guide">
              <NavButton>Pet Handbook</NavButton>
            </StyledLink>
            
            <StyledLink to="/contact">
              <NavButton>Contact</NavButton>
            </StyledLink>
            <StyledLink to="/forum">
              <NavButton>Forum</NavButton>
            </StyledLink>
            {isAuthenticated ? (
              <NavButton onClick={handleLogout}>Logout</NavButton>
            ) : (
              <StyledLink to="/login">
                <NavButton>Login</NavButton>
              </StyledLink>
            )}
          </NavBox>
          <MobileMenu>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </MobileMenu>
          <CustomDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {menuItems}
          </CustomDrawer>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;
