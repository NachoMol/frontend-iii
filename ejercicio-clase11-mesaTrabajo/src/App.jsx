import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/beer/:id" element={<Beer />} />
      </Routes>
    </div>
  );
}

export default App;
