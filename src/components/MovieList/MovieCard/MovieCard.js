import React from 'react'

import './MovieCard.css';

const MovieCard = ({ imglink, name }) => {
    return (
        <div className="movie-card">
            <img src={imglink} alt={name} />
        </div>
    )
}

export default MovieCard;
