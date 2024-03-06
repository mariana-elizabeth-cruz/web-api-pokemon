import { createContext, useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

//URL de API
const URL_POKEMON = `https://pokeapi.co/api/v2/`

export const PokemonContex = createContext()

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)


    //Usar CustomHook
    const { valueSearch, onInputForm, onResetForm } = useForm( {
        valueSearch: '',
    })

    //Metodo para consumir los datos de la API
    const getPokemones = async (limit = 40) => {
        const res = await fetch(`${URL_POKEMON}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const dataPokemon = data.results.map(async (poke) => {
            const newPoke = await fetch(poke.url);
            const allPokemon = await newPoke.json();

            return allPokemon;
        });
        //Recupero los datos de todos los pokemons
        const resultPokemon = await Promise.all(dataPokemon)
        console.log(resultPokemon);
        //almacenamos los datos en un solo arreglo 
        setPokemon([...pokemon, ...resultPokemon])
    }

    //Obtener ID
    const getIdPokemon = async (id) => {
        const res = await fetch(`${URL_POKEMON}pokemon/${id}`)
        const data = await res.json()
        return data;
    }

    // Cargar mas pokemones
    const loadPokemon = () => {
        setOffset(offset + 40);
    }

    //Obtener especie
    // const getSpeciesPokemon = async (id) => {
    //     const res = await fetch(`${URL_POKEMON}pokemon-species/${id}`)
    //     const data = await res.json()
    //     return data;
    // }

    useEffect(() => {
        getPokemones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    

    return (
        <PokemonContex.Provider value={{
            valueSearch,
            onInputForm,
            onResetForm,
            pokemon,
            getIdPokemon,
            loadPokemon

        }} >
            {children}
        </PokemonContex.Provider>
    )


}

