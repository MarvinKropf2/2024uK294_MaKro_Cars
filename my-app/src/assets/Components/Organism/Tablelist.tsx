import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

interface Car {
  id: string;
  Name: string;
  Year: string;
}

interface TablelistProps {
  cars: Car[];
  handleDeleteCar: (carId: string) => void;
}

const Tablelist: React.FC<TablelistProps> = ({ cars, handleDeleteCar }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell> {/* Add ID column */}
          <TableCell>Name</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cars.map((car) => (
          <TableRow key={car.id}>
            <TableCell>{car.id}</TableCell> {/* Show ID */}
            <TableCell>{car.Name}</TableCell>
            <TableCell>{car.Year}</TableCell>
            <TableCell>
              <IconButton component={Link} to={`/update/${car.id}`}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteCar(car.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Tablelist;
