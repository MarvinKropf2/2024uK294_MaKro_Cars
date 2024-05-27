import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <Button variant="contained" color="primary" component={Link} to="/car">
    Home
  </Button>
);

export default HomeButton;
