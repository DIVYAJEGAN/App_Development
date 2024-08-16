import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Typography, TextField, Button, CircularProgress, Card, CardContent, CardMedia, Box, Alert, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Styled components
const GlassCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: theme.spacing(1.5),
  background: 'linear-gradient(45deg, #ff6f61, #ff3d6c)',
  color: '#fff',
  fontWeight: 'bold',
  '&:hover': {
    background: 'linear-gradient(45deg, #ff3d6c, #ff6f61)',
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '8px',
  backgroundColor: '#fff',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
  '& .MuiInputLabel-root': {
    color: '#333',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#007bff',
    },
  },
}));

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: '8px',
  height: 200,
  marginTop: theme.spacing(2),
  maxWidth: '100%', // Ensures it fits within its container
}));

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    }
  });
  return null;
};

const Report = () => {
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');
  const [condition, setCondition] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (!username || !email) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (position) {
      setLatitude(position.lat);
      setLongitude(position.lng);
      fetchAddress(position.lat, position.lng);
    }
  }, [position]);

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      if (!response.ok) {
        throw new Error('Failed to fetch address');
      }
      const data = await response.json();
      setAddress(data.display_name);
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
    setPhotoURL(URL.createObjectURL(file));
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value);
  };

  const validateForm = () => {
    if (!photo) {
      setError('Please upload a photo of the injured pet.');
      return false;
    }
    if (!address) {
      setError('Please enter the address.');
      return false;
    }
    if (!condition) {
      setError('Please describe the pet\'s condition.');
      return false;
    }
    if (!contact) {
      setError('Please provide your contact information.');
      return false;
    }
    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(contact) && !/^\d{10}$/.test(contact)) {
      setError('Please provide a valid email or 10-digit phone number.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('address', address);
    formData.append('condition', condition);
    formData.append('contact', contact);
    formData.append('description', description);
    formData.append('severity', severity);
    formData.append('username', localStorage.getItem('username'));
    formData.append('email', localStorage.getItem('email'));

    try {
      const response = await fetch('http://localhost:5000/api/report', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit report');
      }
      
      const data = await response.json();
      setSuccess(data.message);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, (error) => {
        console.error('Error getting geolocation:', error);
        setError('Unable to retrieve your location');
      });
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Box sx={{ 
        background: 'linear-gradient(135deg, #e0e0e0, #ffffff)', 
        padding: '24px', 
        borderRadius: '16px', 
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', 
        minHeight: '80vh' 
      }}>
        <GlassCard>
          <CardContent>
            <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, mb: 2, textAlign: 'center' }}>
              Report an Injured Free-Roaming Animals
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', mb: 2, textAlign: 'center' }}>
              Help us provide immediate medical attention to free-roaming animals. Fill out the form below and upload a photo to report an injured pet.
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', mb: 2, textAlign: 'center' }}>
                Upload Photo
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ display: 'block', marginBottom: '16px' }}
                />
                {photoURL && (
                  <CustomCardMedia
                    component="img"
                    src={photoURL}
                    alt="Preview"
                  />
                )}
              </Box>
              <CustomTextField
                label="Address"
                value={address}
                onChange={handleAddressChange}
                fullWidth
              />
              <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', mb: 2, textAlign: 'center' }}>
                Select Location on Map
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGeoLocation}
                sx={{ display: 'block', margin: 'auto', mb: 2 }}
              >
                Use My Current Location
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%', borderRadius: '8px', maxWidth: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {position && <Marker position={position} icon={icon} />}
                  <LocationMarker setPosition={setPosition} />
                </MapContainer>
              </Box>
              <CustomTextField
                label="Condition"
                value={condition}
                onChange={handleConditionChange}
                fullWidth
              />
              <CustomTextField
                label="Contact Information"
                value={contact}
                onChange={handleContactChange}
                fullWidth
              />
              <CustomTextField
                label="Description"
                value={description}
                onChange={handleDescriptionChange}
                multiline
                rows={4}
                fullWidth
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Severity</InputLabel>
                <Select
                  value={severity}
                  onChange={handleSeverityChange}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
              <GradientButton
                variant="contained"
                type="submit"
                disabled={loading}
                fullWidth
              >
                {loading ? <CircularProgress size={24} /> : 'Submit Report'}
              </GradientButton>
            </form>
          </CardContent>
        </GlassCard>
      </Box>
    </Container>
  );
};

export default Report;
