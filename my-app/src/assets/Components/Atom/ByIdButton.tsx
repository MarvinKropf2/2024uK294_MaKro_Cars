import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import * as Mui from '@material-ui/core';

export default function ByIdButton({ carId }) {
  return (
   
      <IconButton component={Link} to={`/car/${carId}`}>
        <Mui.InfoIcon />
      </IconButton>
    
  );
}
