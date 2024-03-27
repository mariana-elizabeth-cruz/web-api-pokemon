import { useContext } from "react";
import { PokemonContex } from "../../context/PokemonContex";
import { ListOrderPokemon } from "../ListOrderPokemon";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"


const OrderName = () => {
    const { orderName } = useContext(PokemonContex);
    // const [activo, setActivo] = useState(1)

    return (
        <>
            <h2>checkbox</h2>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Ascendente"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Descendente"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        {/* <Form.Check
                            inline
                            disabled
                            label="3 (disabled)"
                            type={type}
                            id={`inline-${type}-3`}
                        /> */}
                    </div>
                ))}
            </Form>

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

