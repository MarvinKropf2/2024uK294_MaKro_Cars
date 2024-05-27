import { Link } from "react-router-dom";
import * as Mui from '@material-ui/core';
import Fab from "@mui/material/Fab";

export default function AddCarButton() {
  return (
    <Fab
      size="medium"
      color="secondary"
      aria-label="add"
      component={Link}
      to="/post"
    >
      <Mui.AddIcon />
    </Fab>
  );
}
