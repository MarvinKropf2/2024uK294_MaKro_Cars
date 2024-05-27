import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AddCarButton = () => (
  <Button variant="contained" color="primary" component={Link} to="/post">
    Add Car
  </Button>
);

export default AddCarButton;
