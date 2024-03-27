import ListPokemon from "./components/ListPokemon";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import OrderId from "./components/Ordenar/OrderId";
import { Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContex";
import { CardDetailPokemon } from "./components/CardDetailPokemon";
import OrderName from "./components/Ordenar/OrderName";
import OrderHeight from "./components/Ordenar/OrderHeight";
import OrderWeight from "./components/Ordenar/OrderWeight";
import "./App.css";


function App() {
  return (
    <>
      <PokemonProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<ListPokemon />} />
          <Route path="/ordenarId" element={<OrderId />} />
          <Route path="/ordenarName" element={<OrderName />} />
          <Route path="/ordenarTam" element={<OrderHeight />} />
          <Route path="/ordenarPeso" element={<OrderWeight />} />
          <Route path="/pokemon/:id" element={<CardDetailPokemon />} />
        </Routes>
        <Footer />
      </PokemonProvider>
    </>
  );
}

export default App;
