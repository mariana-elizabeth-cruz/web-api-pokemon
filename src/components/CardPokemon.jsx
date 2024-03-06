/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"



export const CardPokemon = ({ pokemon }) => {
    return (
        <>
            <div>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${pokemon.name}`} />
            </div>
            <div>
                <p> N° {pokemon.id} </p>
                <h3> Nombre: {pokemon.name} </h3>

                <p>Peso: {pokemon.weight} </p>
                <p>Altura: {pokemon.height} </p>
            </div>
            <Link to={`/pokemon/${pokemon.id}`} > Detalles de {pokemon.name} </Link>
        </>

    )
}

