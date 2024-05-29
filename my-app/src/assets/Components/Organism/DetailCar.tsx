import Navbar from "../Molecules/Navbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarService from "../../service/CarsDataService";

function DetailedCar() {
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

  return (
    <>
      <Navbar />
      <Typography>
        <h1>Details</h1>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h5" component="div">
            <TextField
              label="Carname"
              value={name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <TextField
              label="Year"
              value={year}
              InputProps={{
                readOnly: true,
              }}
            />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default DetailedCar;
