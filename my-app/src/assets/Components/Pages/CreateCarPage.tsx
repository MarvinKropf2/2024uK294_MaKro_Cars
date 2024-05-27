import Navbar from "../Molecules/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import CarService from "../Molecules/Table";

function CreateCarPage() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const handleCreateCar = async () => {
    try {
      await CarService().createCar(name, year);
      alert("Creating car was successful.");
    } catch (error) {
      alert("Error creating a car!");
    }
  };

  return (
    <>
      <Navbar />
      <Typography>
        <h1>Create a new car</h1>
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
            onChange={(e) => setYear(e.target.value)}
            variant="standard"
            required
          />
          <Button
            variant="contained"
            onClick={handleCreateCar}
            component={Link}
            to="/car"
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateCarPage;
