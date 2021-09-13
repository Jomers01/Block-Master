import React, { useEffect, useState } from "react";
import { Div, H1 } from "../styles/MoviesS";
import Movies from "./Movies";

const Peliculas = ({busqueda, cat2}) => {
  const [movies, setMovies] = useState([]);
  const [ page, setPage ] = useState(1)
  let API = '';

  if (busqueda.length) {
    API = 'https://block-master-jomers.herokuapp.com/peliculas?title_like='
  }else{
    API = `https://block-master-jomers.herokuapp.com/peliculas?_limit=8&_page=${page}`;
  }

  useEffect(() => {
      fetch(`${API}${busqueda}`)
      .then(res => res.json())
      .then(resp => setMovies(resp))
      .catch(err=> console.log(err))
  }, [busqueda]);

  useEffect(() => {
   fetch(API)
   .then(res => res.json())
   .then(resp => setMovies([...movies, ...resp]))
  }, [page])

  window.onscroll = function() {
    if (window.innerHeight + window.scrollY === document.documentElement.offsetHeight) {
      setPage(page + 1)
    }
  }

  return (
    <div>
      <H1>Todas las peliculas</H1>
      <Div>
          {
              cat2 === 'todas'? 
                movies.map(movie =>(
                  <Movies
                    key={movie.id}
                    peli={movie}
                  />
                ))
                :cat2 === 'top'?
                movies.filter(vote =>vote.vote_average > 7).map(movie => (
                  <Movies
                    key={movie.id}
                    peli={movie}
                  />
                ))
                :movies.filter(vote =>vote.vote_average < 7).map(movie => (
                  <Movies
                    key={movie.id}
                    peli={movie}
                  />
                ))
          } 
      </Div>
      <div className="d-flex justify-content-center pb-3">
        <div className="spinner-border text-primary mb-5 " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Peliculas;
