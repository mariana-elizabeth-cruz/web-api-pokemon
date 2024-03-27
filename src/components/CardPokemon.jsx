/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';



export const CardPokemon = ({ pokemon }) => {
    return (
        <>
            <Card className="cardPokemonStyle" >
                <Card.Img variant="top" className="cardPokemonImg" src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon.name}`}  />
                <Card.Body>
                    <Card.Title> N° 000{pokemon.id} </Card.Title>
                    <Card.Title>
                        Nombre: {pokemon.name}
                    </Card.Title>
                    <Card.Text>
                        Peso: {pokemon.weight}
                    </Card.Text>
                    <Card.Text>
                        Altura: {pokemon.height}
                    </Card.Text>
                    <Link to={`/pokemon/${pokemon.id}`} > Detalles de {pokemon.name} </Link>
                </Card.Body>
            </Card>
        </>
    )
}

