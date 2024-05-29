import Navbar from "../Molecules/Navbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import CarService from "../Molecules/Table";

function CreateCarPage() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const handleCreateCar = async () => {
    try {
      if (name && year) {
        await CarService().createCar(name, year);
        alert("Creating car was successful.");
      } else {
        setError("Please provide both name and year.");
      }
    } catch (error) {
      alert("Error creating a car!");
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
            onChange={handleYearChange}
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
          {error && <Typography color="error">{error}</Typography>}
        </Grid>
      </Grid>
    </>
  );
}

export default CreateCarPage;
