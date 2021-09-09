import React, { useEffect, useState } from "react";
import { Div, H1 } from "../styles/MoviesS";
import Movies from "./Movies";

const Peliculas = ({busqueda, cat2}) => {
  const [movies, setMovies] = useState([]);
  const url = "https://block-master-jomers.herokuapp.com/peliculas?title_like=";

  useEffect(() => {
    obtenerDatos();
  }, [busqueda]);

  const obtenerDatos = async () => {
    const data = await fetch(`${url}${busqueda}`);
    const peli = await data.json();
    setMovies(peli);
  };

  return (
    <div>
      <H1>Todas las peliculas</H1>
      <Div>
          {   
              cat2 == 'todas'? 
                movies.map(movie =>(
                  <Movies
                    key={movie.id}
                    item={movie}
                  />
                ))
                :cat2 == 'top'?
                movies.filter(vote =>vote.vote_average > 5).map(movie => (
                  <Movies
                    key={movie.id}
                    item={movie}
                  />
                ))
                :movies.filter(vote =>vote.vote_average < 5).map(movie => (
                  <Movies
                    key={movie.id}
                    item={movie}
                  />
                ))
          }
      </Div>
    </div>
  );
};

export default Peliculas;
