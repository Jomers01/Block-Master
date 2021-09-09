import React from 'react'
import { Span, DivIm } from '../styles/MoviesS'

const Movies = (movie) => {
    
    return (
        <DivIm>
            <Span><img src="https://i.ibb.co/kK3Ljn2/estrella.png" alt="" width="14px" />{movie.item.vote_average}</Span>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.item.poster_path} alt="" width="250px" />
        </DivIm>
    )
}

export default Movies
