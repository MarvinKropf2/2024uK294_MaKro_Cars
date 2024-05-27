import React, { useEffect, useState } from 'react';
import CarService from '../../service/CarsDataService';
import Navbar from '../Molecules/Navbar';
import Description from '../Atom/Descripion';
import Tablelist from './Tablelist';
import EditCarButton from '../Atom/EditCarButton';


function ShowAll() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await CarService().getCarData();
      setCars(data);
    };

    fetchCars();
  }, []);

  return (
    <>
      <Navbar />
      <Description />
      <Tablelist cars={cars} />

    </>
  );
}

export default ShowAll;
