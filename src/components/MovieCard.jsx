import React from "react";
import "./MovieCard.css"

const MovieCard = ({ movie, goToDetails }) => (
  <div className="movie-card" onClick={() => goToDetails(movie)}>
    <img src={movie.img} alt={movie.title} className="movie-poster" />
    <h2 className="movie-title">{movie.title}</h2>
    <p className="movie-description">{movie.description}</p>
    <span className="movie-rating">{movie.rating}</span>
    <button className="movie-button">Смотреть</button>
  </div>
);

export default MovieCard
