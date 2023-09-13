import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Characters from "./components/Characters";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route element={<Characters />} path="/"></Route>
        </Route>
        <Route element={<PageNotFound />} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
