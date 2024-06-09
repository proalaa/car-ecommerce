import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/pages/AppLayout.tsx";
import Home from "@/pages/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
