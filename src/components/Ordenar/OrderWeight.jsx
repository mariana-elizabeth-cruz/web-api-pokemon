import { useContext } from "react"
import { PokemonContex } from "../../context/PokemonContex"
import { ListOrderPokemon } from "../ListOrderPokemon"


const OrderWeight = () => {
  const { orderWeight } = useContext(PokemonContex)

  return (
    <>
      <main>
        <h1>Ordenar Pokemon por peso</h1>
        <div className="container">
          {
            orderWeight.map(pokemon => (
              <ListOrderPokemon pokemon={pokemon} key={pokemon.id} />
            ))
          }
        </div>
      </main>
    </>
  )
}

export default OrderWeight