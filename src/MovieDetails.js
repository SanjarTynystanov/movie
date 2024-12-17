import React from "react";
import "./MovieDetails.css"


const MovieDetails = ({ movie, goToHome }) => (
  <div className="movie-details">
    <button onClick={goToHome} className="back-button">
      Выйти с фильма
    </button>
    <div className="movie-details">
      <div className="movie-details-header">
        <img src={movie.img} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-category">Категория: {movie.category}</p>
          <p className="movie-quality">Качество: {movie.quality}</p>
          <p className="movie-duble">Озвучка: {movie.duble}</p>
          <p className="movie-data">Год выпуска: {movie.data}</p>
          <p className="movie-time">Продолжительность: {movie.time}</p>
          <p className="movie-rating">
            Рейтинг: КиноПоиск {movie.kp}, КиноСерч {movie.kinosearch}
          </p>
          <p className="movie-country">Страна: {movie.country}</p>
          <p className="movie-genre">Жанры: {movie.genre}</p>
          <p className="movie-director">Режиссёр: {movie.director}</p>
          <p className="movie-actors">В ролях: {movie.actors}</p>
        </div>
      </div>
      <div className="movie-description">
        <h2>Описание:</h2>
        <p>{movie.text}</p>
      </div>
      <div className="movie-player">
        <h2>Смотреть фильм:</h2>
        <iframe
          src={movie.data_src}
          className="movie-iframe"
          allowFullScreen
          title={movie.title}
        ></iframe>
      </div>
    </div>
  </div>
);

export default MovieDetails;

