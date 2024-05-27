import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarPage from "./assets/Components/Pages/CarPage";
import DetailedCarPage from "./assets/Components/Pages/DetailedCarPage";
import LoginPage from "./assets/Components/Pages/LoginPage";
import CreateCarPage from "./assets/Components/Pages/CreateCarPage";
import EditCarPage from "./assets/Components/Pages/EditCarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="car" Component={CarPage} />
        <Route path="car/:carId" Component={DetailedCarPage} />
        <Route path="login" Component={LoginPage} />
        <Route path="/" Component={LoginPage} />
        <Route path="post" Component={CreateCarPage} />
        <Route path="update/:carId" Component={EditCarPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
