import { useContext } from "react"
import { PokemonContex } from "../context/PokemonContex"

import { ListOrderPokemon } from "./ListOrderPokemon"


const OrderPokemon = () => {
  const { ordenar } = useContext(PokemonContex)
  


  return (
    <>
      <main>
        <h1>Ordenar Pokemon</h1>
         <div className="container">
          {
            ordenar.map(pokemon => (
              <ListOrderPokemon pokemon={pokemon} key={pokemon.id} />
            ))
          }
        </div> 
    {/*     <div>
        <button onClick={() => loadPokemon()}> Mas </button> 
      </div> 
*/}
      </main>
    </>

  )
}

export default OrderPokemon