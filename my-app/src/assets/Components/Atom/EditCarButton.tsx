import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface EditCarButtonProps {
  carId: string;
}

const EditCarButton: React.FC<EditCarButtonProps> = ({ carId }) => (
  <Button variant="contained" color="secondary" component={Link} to={`/update/${carId}`}>
    Edit Car
  </Button>
);

export default EditCarButton;
