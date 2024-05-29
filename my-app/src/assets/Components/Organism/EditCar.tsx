import Navbar from "../Molecules/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CarService from "../Molecules/Table";

function EditCarPage() {
  const { carId } = useParams();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carData = await CarService().getCarById(carId);
        setName(carData.Name);
        setYear(carData.Year);
      } catch (error) {
        alert("Id was not found.");
      }
    };

    fetchData();
  }, [carId]);

  const handleUpdateCar = async () => {
    try {
      await CarService().updateCar(carId, name, year);
      alert("Update successful.");
    } catch (error) {
      alert("Error updating the car.");
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
      <Typography>
        <h1>Update car data</h1>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="margin-normal"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            required
          />
          <br />
          <TextField
            id="margin-normal"
            label="Year"
            value={year}
            onChange={handleYearChange}
            variant="standard"
            required
          />
          <Button
            variant="contained"
            onClick={handleUpdateCar}
            component={Link}
            to="/car"
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditCarPage;
