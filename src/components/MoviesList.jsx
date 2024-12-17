import React from "react";
import "./MoviesList.css"
import MovieCard from "./MovieCard"; // Импорт компонента MovieCard

const MoviesList = ({ movies, goToDetails }) => (
  <div className="movies-list">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} goToDetails={goToDetails} />
    ))}
  </div>
);

export default MoviesList;

