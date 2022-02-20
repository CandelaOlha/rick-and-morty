import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import Episodes from "./components/Episodes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;