import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ByIdButtonProps {
  carId: string;
}

const ByIdButton: React.FC<ByIdButtonProps> = ({ carId }) => (
  <Button variant="contained" color="primary" component={Link} to={`/car/${carId}`}>
    View Car
  </Button>
);

export default ByIdButton;
