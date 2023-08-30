import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route element={<Characters />} path="/"></Route>
          <Route element={<Locations />} path="/locations"></Route>
          <Route element={<Episodes />} path="/episodes"></Route>
        </Route>
        <Route element={<PageNotFound />} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
