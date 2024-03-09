import { useContext } from "react";
import { PokemonContex } from "../../context/PokemonContex";
import { ListOrderPokemon } from "../ListOrderPokemon";


const OrderName = () => {
    const { orderName } = useContext(PokemonContex);

    return (

        <>
            <main>
                <h1>OrderName</h1>
                <div className="container">
                    {
                        orderName.map(pokemon => (
                            <ListOrderPokemon pokemon={pokemon} key={pokemon.id} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default OrderName