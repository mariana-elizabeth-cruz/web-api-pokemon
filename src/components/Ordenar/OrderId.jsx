import { useContext } from "react"
import { PokemonContex } from "../../context/PokemonContex"
import { ListOrderPokemon } from "../ListOrderPokemon"


const OrderId = () => {
    const { orderId } = useContext(PokemonContex)

    return (
        <>
            <main>
                <h1>Ordenar Pokemon</h1>
                <div className="container">
                    {
                        orderId.map(pokemon => (
                            <ListOrderPokemon pokemon={pokemon} key={pokemon.id} />
                        ))
                    }
                </div>
            </main>
            {/*     <div>
        <button onClick={() => loadPokemon()}> Mas </button> 
      </div> 
*/}

        </>
    )
}

export default OrderId