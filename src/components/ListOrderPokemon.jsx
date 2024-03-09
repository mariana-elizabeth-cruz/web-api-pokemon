/* eslint-disable react/prop-types */

export const ListOrderPokemon = ({ pokemon }) => {
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
    </>
  )
}

