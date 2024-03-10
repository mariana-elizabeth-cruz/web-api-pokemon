import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../page/Loader'
import { PokemonContex } from '../context/PokemonContex'
import { capitalLetter } from '../helper/capitalLetter'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const CardDetailPokemon = () => {
    const { getIdPokemon, getSpeciesPokemon } = useContext(PokemonContex)
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})
    const [specie, setSpecie] = useState({})
    const { id } = useParams()

    const getDataPokemon = async id => {
        const res = await getIdPokemon(id)
        setPokemon(res)
        setLoading(false)
    }

    const getSpecie = async id => {
        const respu = await getSpeciesPokemon(id)
        setSpecie(respu)
    }

    useEffect(() => {
        getDataPokemon(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getSpecie(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //FALTA TERMINAR DETALLES

    return (
        <>
            <main>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <>
                            
                           {/*  FALTA EVOLUCION */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title> N° 000{pokemon.id} </Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default}
                                    alt={`Pokemon ${pokemon.name}`} />
                                <Card.Body>
                                    <Card.Title> {capitalLetter(pokemon.name)} </Card.Title>
                                    <Card.Text>
                                        Color: {specie.color.name}
                                    </Card.Text>

                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Altura: {pokemon.height}</ListGroup.Item>
                                    <ListGroup.Item>Peso: {pokemon.weight}</ListGroup.Item>
                                    <ListGroup.Item>
                                        Habilidad:
                                        {pokemon.abilities.map(a => (
                                            <p key={a.ability.name}>
                                                {a.ability.name}
                                            </p>
                                        ))}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Tipo:
                                        {pokemon.types.map(tip => (
                                            <p key={tip.type.name}>
                                                {tip.type.name}
                                            </p>
                                        ))}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </>
                    )
                }
            </main>
        </>
    )
}


// <section>
//                                 <h2> {capitalLetter(pokemon.name)}
//                                     <span> N° 000{pokemon.id} </span></h2>
//                                 <img src={pokemon.sprites.other.dream_world.front_default}
//                                     alt={`Pokemon ${pokemon.name}`} />
//                             </section>
//                             <section>
//                                 <h3>Color </h3>
//                                 <p> {specie.color.name} </p>
//                                 {/* <p> {specie.flavor_text_entries[26].flavor_text} </p>
//                                 <p> {specie.flavor_text_entries[34].flavor_text} </p> */}
//                                 <h3>Altura: </h3>
//                                 <p>
//                                     {pokemon.height}
//                                 </p>
//                                 <h3>Peso: </h3>
//                                 <p>
//                                     {pokemon.weight}
//                                 </p>
//                             </section>
//                             <section>
//                                 <h3>Habilidad</h3>
//                                 <div>
//                                     {pokemon.abilities.map(a => (
//                                         <p key={a.ability.name}>
//                                             {a.ability.name}
//                                         </p>
//                                     ))}
//                                 </div>
//                                 <h3>Tipo</h3>
//                                 <div>
//                                     {pokemon.types.map(tip => (
//                                         <p key={tip.type.name}>
//                                             {tip.type.name}
//                                         </p>
//                                     ))}
//                                 </div>

//                             </section>
//                             <section>
//                                 <h3>Estadisticas</h3>
//                                 <div>
//                                     <h4>Hp</h4>
//                                     <span>
//                                         {pokemon.stats[0].base_stat}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <h4>Ataque</h4>
//                                     <span>{pokemon.stats[1].base_stat}</span>
//                                 </div>
//                                 <div>
//                                     <h4>Defensa</h4>
//                                     <span>{pokemon.stats[2].base_stat}</span>
//                                 </div>
//                                 <div>
//                                     <h4>Ataque Especial</h4>
//                                     <span>{pokemon.stats[3].base_stat}</span>
//                                 </div>
//                                 <div>
//                                     <h4>Defensa Especial</h4>
//                                     <span>{pokemon.stats[4].base_stat}</span>
//                                 </div>
//                                 <div>
//                                     <h4>Velocidad</h4>
//                                     <span>{pokemon.stats[5].base_stat}</span>
//                                 </div>
//                             </section>