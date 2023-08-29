import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Characters />} path="/"></Route>
        <Route element={<Locations />} path="/locations"></Route>
        <Route element={<Episodes />} path="/episodes"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
