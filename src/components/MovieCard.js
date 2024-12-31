import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/150"
        }
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Lançamento: {movie.release_date || "Data desconhecida"}</p>
        <p>Nota: {movie.vote_average || "N/A"}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
