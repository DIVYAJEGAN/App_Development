import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './Components/Login';
import Register from './Components/Register';

import Home from './Components/Home';
import Report from './Components/Pages/Report';
import Contact from './Components/Pages/Contact';
import Guide from './Components/Pages/Guide';
import DogPage from './Components/Pages/DogPage';
import CatPage from './Components/Pages/CatPage';
import RabbitPage from './Components/Pages/RabbitPage';
import FishPage from './Components/Pages/FishPage';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Forum from './Components/DiscussionForum/Forum';
import { ForumProvider } from './Components/DiscussionForum/ForumContext';
import './Components/Styles/Content.css';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsAuthenticated(false);
  };

  return (
    <ForumProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Router>
            <Header isAuthenticated={isAuthenticated} onLogin={setIsAuthenticated} />
            <div className="content-container">
              <Routes>
                <Route path="/" element={<Home />} />
      
                <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/report" element={<Report />} />
                <Route path="/forum/*" element={<Forum />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/dog" element={<DogPage />} />
                <Route path="/cat" element={<CatPage />} />
                <Route path="/rabbit" element={<RabbitPage />} />
                <Route path="/fish" element={<FishPage />} />
                <Route path="/fish" element={<FishPage />} />
               
                
              </Routes>
            </div>
            
          </Router>
        </div>
        <Footer/>
      </ThemeProvider>
    </ForumProvider>
  );
}

export default App;
