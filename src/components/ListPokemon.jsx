import { useContext } from "react";
import { PokemonContex } from "../context/PokemonContex";
import { CardPokemon } from "./CardPokemon";
import Loader from "../page/Loader";



const ListPokemon = () => {
  const { pokemon, loadPokemon, loading } = useContext(PokemonContex)

  return (
    <main>
      <h1>Lista de pokemones</h1>
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <div className="container listPokemonStyle">
              {
                pokemon.map(pokemon => (
                  <CardPokemon pokemon={pokemon} key={pokemon.id} />
                ))
              }
            </div>
            <div>
              <button onClick={() => loadPokemon()}> Mas </button>
            </div>
          </>
        )
      }

    </main>
  );
};

export default ListPokemon;
