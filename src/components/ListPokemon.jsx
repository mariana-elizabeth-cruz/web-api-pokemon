import { useContext } from "react";
import { PokemonContex } from "../context/PokemonContex";
import { CardPokemon } from "./CardPokemon";



const ListPokemon = () => {
  const { pokemon } = useContext(PokemonContex)

  return (
    <main>
      <h1>Lista de pokemones</h1>
      <div className="container">
        {
          pokemon.map(pokemon => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))
        }
      </div>
      {/* falta cargar
      <button onClick={() => loadPokemon()}> Mas </button> */}
    </main>
  );
};

export default ListPokemon;
