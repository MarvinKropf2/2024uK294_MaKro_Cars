import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Button variant="normal" color="secondary" component={Link} to="/car">
      Go Home
    </Button>
  );
}
