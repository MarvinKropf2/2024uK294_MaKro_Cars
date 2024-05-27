import React, { useEffect, useState } from 'react';
import Navbar from '../Molecules/Navbar';
import Tablelist from '../Organism/Tablelist';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CarService from '../Molecules/Table';

interface Car {
  id: string;
  Name: string;
  Year: string;
}

const CarPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await CarService().getCarData();
      setCars(data);
    };

    fetchCars();
  }, []);

  const handleDeleteCar = async (carId: string) => {
    try {
      await CarService().deleteCar(carId);
      setCars(cars.filter((car) => car.id !== carId));
      alert("Car deleted successfully.");
    } catch (error) {
      alert("Error deleting the car.");
    }
  };

  return (
    <>
      <Navbar />
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/post"
        style={{ marginBottom: '20px' }}
      >
        Add Car
      </Button>
      <Tablelist cars={cars} handleDeleteCar={handleDeleteCar} />
    </>
  );
}

export default CarPage;
