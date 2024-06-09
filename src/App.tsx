import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/pages/AppLayout.tsx";
import Home from "@/pages/Home.tsx";
import NewCar from "@/pages/NewCar.tsx";
import CarDetails from "@/pages/CarDetails.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="car/:id" element={<CarDetails />} />
          <Route path={"new-car"} element={<NewCar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
