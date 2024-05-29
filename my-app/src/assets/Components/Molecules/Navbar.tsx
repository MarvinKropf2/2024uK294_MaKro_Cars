import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import HomeButton from '../Atom/HomeButton'; 

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Car App
        </Typography>
        <HomeButton /> {}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
