import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route element={<Characters />} path="/"></Route>
          <Route element={<CharacterDetails />} path="/characters/:id"></Route>
        </Route>
        <Route element={<PageNotFound />} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
