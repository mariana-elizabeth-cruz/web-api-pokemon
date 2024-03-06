import ListPokemon from "./components/ListPokemon";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import OrderPokemon from "./components/OrderPokemon"
import { Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContex";
import { CardDetailPokemon } from "./components/CardDetailPokemon";
import "./App.css";





function App() {
  return (
    <>
    <PokemonProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<ListPokemon />} />
        <Route path="/ordenar" element={<OrderPokemon />} />
        <Route path="/pokemon/:id" element= {<CardDetailPokemon/>} />
      </Routes>
      <Footer/>
      </PokemonProvider>
    </>
  );
}

export default App;
