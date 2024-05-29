import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Car App
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/car">
          Home
        </Button>
        <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginLeft: '10px' }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
