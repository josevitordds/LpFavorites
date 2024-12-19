import React from "react";
import MovieCard from "../components/MovieCard";
import "../styles/MovieResults.css"

function MovieResults({ movies }) {
  return (
    <div className="movie-results">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>Nenhum filme encontrado. Tente buscar novamente!</p>
      )}
    </div>
  );
}

export default MovieResults;
