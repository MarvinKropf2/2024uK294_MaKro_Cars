import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Title from "../Atom/Title";
import HomeButton from "../Atom/HomeButton";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Title />

          <HomeButton />

        </Toolbar>
      </AppBar>
    </Box>
  );
}
