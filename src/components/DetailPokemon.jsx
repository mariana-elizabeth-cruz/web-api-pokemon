import { useContext } from "react"
import { PokemonContex } from "../context/PokemonContex"
import CardDetailPokemon from "./CardDetailPokemon"


const DetailPokemon = () => {

  const { pokemon } = useContext(PokemonContex)

  return (
    <>
      <h1>Detalles de Pokemon</h1>
      <div className="container">
        {
          pokemon.map(pokemon => (
            <CardDetailPokemon pokemon={pokemon} key={pokemon.id} />
          ))
        }
      </div>
    </>
  )
}

export default DetailPokemon