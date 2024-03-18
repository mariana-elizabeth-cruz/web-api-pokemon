import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
// import {  Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <header>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/portada.jpeg"
              alt="Portada uno"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/portada2.jpeg"
              alt="Portada dos"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/portada-3.jpeg"
              alt="Portaa tres"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <main>
          <article>
            <section>
              <div>

                <h2>Historia</h2>

                <p>Pokémon (ポケモン Pokemon) es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial. </p>
                <p>Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas con un sistema de evolución lamarckiano. Los jugadores toman el papel Entrenadores Pokémon y tienen tres objetivos generales: completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon poderosos de aquellos que han atrapado para competir contra otros entrenadores. El objetivo final del juego es llegar a ganar la Liga Pokémon y convertirse en el campeón regional. La temática de coleccionar, entrenar y luchar están presentes en casi todas las versiones de la franquicia Pokémon, incluidos los videojuegos, las series de anime y manga, y el juego de cartas coleccionables Pokémon.</p>
                <p>En la saga principal, el jugador emprenderá un viaje en el que deberá recorrer una región específica del mundo Pokémon. En determinadas ciudades existen una serie de poderosos entrenadores, conocidos como Líderes de Gimnasio, que el entrenador debe derrotar para obtener las medallas de gimnasio y poder progresar. Una vez que se recogen todas las medallas de la región, el entrenador es elegible para desafiar la Liga Pokémon de la región, donde le esperan cuatro de los mejores entrenadores a los que se deberá enfrentar para obtener el título de Campeón.</p>
                <p>La saga también tiene arcos argumentales secundarios: En la mayoría de títulos existe un equipo antagonista, una banda cuyos planes están relacionados con el tráfico, la explotación o el maltrato de Pokémon y que el jugador deberá derrotar. Muchos títulos también implican que el jugador pueda desentrañar misterios sobre la existencia de Pokémon legendarios o míticos.</p>

              </div>
              <div>
                <img src="/img/friends.png" alt="Imagen de pokemones" />
              </div>
            </section>
            <section>

              {/* <h3>Creado por </h3> */}
              {/* <Link to={https://es.wikipedia.org/wiki/Satoshi_Tajiri}>Satoshi Tajiri</Link>
                <Link to={https://es.wikipedia.org/wiki/Ken_Sugimori}>Ken Sugimori</Link>
                <Link to={https://es.wikipedia.org/wiki/Game_Freak}>Game Freak</Link>
                <Link to={https://es.wikipedia.org/wiki/Nintendo}>Nintendo</Link> */}

              {/* <div>
                <img src="#" alt="Autor" />
              </div> */}
              <Card style={{ width: '30rem' }}>
                <Card.Body>

                  <Card.Subtitle className="mb-2 text-muted">Creado por</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                  </Card.Text>
                  <Card.Link href="#">Satoshi Tajiri</Card.Link>
                  <Card.Link href="#">Ken Sugimori</Card.Link>
                  <Card.Link href="#">Game Freak</Card.Link>
                  <Card.Link href="#">Nintendo</Card.Link>
                </Card.Body>
              </Card>
            </section>
          </article>

        </main>
      </header>

    </>
  )
}

export default Home

