import { useEffect, useState } from "react";

// url para peso, altura
// const URL_ALTURA = `https://pokeapi.co/api/v2/pokemon/1/`
const URL_PRUEBA = `https://pokeapi.co/api/v2/pokemon`;

const ListPokemon = () => {
  const [dato, setDato] = useState([]);

  // obtener nombre y url
  // useEffect(() => {
  //   fetch(URL_PRUEBA)
  //     .then((res) => res.json())
  //     .then((data) => setDato(data.results));
  // }, []);

  useEffect(() => {
    fetch(URL_PRUEBA)
      .then((response) => response.json())
      .then(async (datos) => {
        const { results } = datos;
        setDato(results);

        console.log(results);
        const datosPokemon = results.map(async (poke) => {
          const newPoke = await fetch(poke.url);
          const datos = await newPoke.json();

          return {
            id: datos.id,
            name: datos.name,
            img: datos.sprites.other.dream_world.front_default,
          };
        });
        console.log(Promise.all(datosPokemon));
        setDato(await Promise.all(datosPokemon));
      });
  }, []);

  return (
    <main>
      <h1>Lista de pokemones</h1>
      {/* <section>
        <ul>
          {dato.map((poke, id) => (
            <li key={id}>
              {poke.name} <span>-</span> {poke.url}
            </li>
          ))}
        </ul>
      </section> */}
      <section>
        {dato.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <img src={pokemon.img} alt={pokemon.name} />
              <p> {pokemon.id} </p>
              <p> {pokemon.name} </p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default ListPokemon;
