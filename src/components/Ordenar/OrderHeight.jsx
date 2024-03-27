import { useContext } from "react"
import { PokemonContex } from "../../context/PokemonContex"
import { ListOrderPokemon } from "../ListOrderPokemon"


const OrderHeight = () => {
    const { orderHeight } = useContext(PokemonContex)

    return (
        <>
            <main>
                <h1>Ordenar por Tamaño</h1>
                <div className="container">
                    {
                        orderHeight.map(pokemon => (
                            <ListOrderPokemon pokemon={pokemon} key={pokemon.id} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default OrderHeight