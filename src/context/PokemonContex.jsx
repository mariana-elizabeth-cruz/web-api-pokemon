import { createContext, useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

//URL de API
const URL_POKEMON = `https://pokeapi.co/api/v2/`

export const PokemonContex = createContext()

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)
    const [orderId, setOrderId] = useState([])
    const [orderName, setOrderName] = useState([])
    const [orderHeight, setOrderHeight] = useState([])
    const [orderWeight, setOrderWeight] = useState([])

    //Estados para aplicacion
    const [loading, setLoading] = useState(true)

    //Usar CustomHook
    const { valueSearch, onInputForm, onResetForm } = useForm({
        valueSearch: '',
    })

    //Metodo para consumir los datos de la API
    const getPokemones = async (limit = 10) => {
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
        setLoading(false)
    }

    //Obtener ID
    const getIdPokemon = async (id) => {
        const res = await fetch(`${URL_POKEMON}pokemon/${id}`)
        const data = await res.json()
        return data;
    }

    // Cargar mas pokemones
    const loadPokemon = () => {
        setOffset(offset + 10);
    }

    //Obtener especie
    const getSpeciesPokemon = async (id) => {
        const res = await fetch(`${URL_POKEMON}pokemon-species/${id}`)
        const data = await res.json()
        return data;
    }

    //Ordenar pokemones por ID
    const ordenarPokemons = async (limit = 10) => {
        const res = await fetch(`${URL_POKEMON}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const pokemonUrls = data.results.map(pokemon => pokemon.url);
        const pokemonDataResponses = await Promise.all(pokemonUrls.map(url => fetch(url)));
        const pokemonDataJson = await Promise.all(pokemonDataResponses.map(response => response.json()));

        //guardar datos de ID descendente
        const sortedPokemon = pokemonDataJson.sort((a, b) => b.id - a.id);
        setOrderId(sortedPokemon);
        console.log(sortedPokemon);
    }

    //Ordenar pokemones por nombre
    const ordenarNombres = async (limit = 10) => {
        const res = await fetch(`${URL_POKEMON}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const pokemonUrls = data.results.map(pokemon => pokemon.url);
        const pokemonDataResponses = await Promise.all(pokemonUrls.map(url => fetch(url)));
        const pokemonDataJson = await Promise.all(pokemonDataResponses.map(response => response.json()));

        //guardar datos de name ascendente
        const sortedPokemonName = pokemonDataJson.sort((a, b) => a.name.localeCompare(b.name));
        console.log(sortedPokemonName);
        setOrderName(sortedPokemonName)
    }

    //Ordenar pokemones por tamaño
    const ordenarHeight = async (limit = 10) => {
        const res = await fetch(`${URL_POKEMON}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const pokemonUrls = data.results.map(pokemon => pokemon.url);
        const pokemonDataResponses = await Promise.all(pokemonUrls.map(url => fetch(url)));
        const pokemonDataJson = await Promise.all(pokemonDataResponses.map(response => response.json()));

        //guardar datos ascendente
        const sortedPokemon = pokemonDataJson.sort((a, b) => a.height - b.height);
        setOrderHeight(sortedPokemon);
        console.log(sortedPokemon);
    }

    //Ordenar pokemones por Peso
    const ordenarWeight = async (limit = 10) => {
        const res = await fetch(`${URL_POKEMON}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const pokemonUrls = data.results.map(pokemon => pokemon.url);
        const pokemonDataResponses = await Promise.all(pokemonUrls.map(url => fetch(url)));
        const pokemonDataJson = await Promise.all(pokemonDataResponses.map(response => response.json()));

        //guardar datos ascendente
        const sortedPokemon = pokemonDataJson.sort((a, b) => a.weight - b.weight);
        setOrderWeight(sortedPokemon);
        console.log(sortedPokemon);
    }

    useEffect(() => {
        getPokemones();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset])

    useEffect(() => {
        ordenarPokemons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        ordenarNombres()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        ordenarHeight()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        ordenarWeight()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <PokemonContex.Provider value={{
            valueSearch,
            onInputForm,
            onResetForm,
            pokemon,
            getIdPokemon,
            getSpeciesPokemon,
            loadPokemon,
            orderId,
            orderName,
            orderHeight,
            orderWeight,
            loading,
            setLoading

        }} >
            {children}
        </PokemonContex.Provider>
    )


}

