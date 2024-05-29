import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, TextField, Button, Typography } from '@mui/material';
import Navbar from '../Molecules/Navbar';
import CarService from '../Molecules/Table';

function EditCarPage() {
  const { carId } = useParams();
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carData = await CarService().getCarById(carId);
        setName(carData.Name);
        setYear(carData.Year);
      } catch (error) {
        alert('Id was not found.');
      }
    };

    fetchData();
  }, [carId]);

  const handleUpdateCar = async () => {
    try {
      await CarService().updateCar(carId, name, year);
      alert('Update successful.');
    } catch (error) {
      alert('Error updating the car.');
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9-]*$/.test(value)) {
      setYear(value);
    }
  };

  return (
    <>
      <Navbar />
      <Typography variant="h4" component="div" gutterBottom>
        Update car data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            required
            fullWidth
          />
          <br />
          <TextField
            id="year"
            label="Year"
            value={year}
            onChange={handleYearChange}
            variant="standard"
            required
            fullWidth
          />
          <Button
            variant="contained"
            onClick={handleUpdateCar}
            component={Link}
            to="/car"
            style={{ marginTop: '20px' }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditCarPage;
