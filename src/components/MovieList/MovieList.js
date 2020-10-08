import React from 'react';

import MovieCard from './MovieCard/MovieCard';

import './MovieList.css';

import MovieData from '../../store';

const MovieList = () => {
    return (
        <div className="movie-list">
            <div className="container">
                <div className="heading">
                    <h2>Action / Adventure</h2>
                </div>
                <div className="col">
                    {MovieData.map(movie => (
                        <MovieCard imglink={movie.imglink} name={movie.name} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
