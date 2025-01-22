import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function MoviesRecent({ genreId, filter, filterOther, num }) {
  const [recentMovies, setRecentMovies] = useState([]);
  const API_KEY = "a0261dcdeeb25805ffd5a4ecd28d9225";

  useEffect(() => {
    const fetchRecentMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
          {
            params: {
              api_key: API_KEY,
              with_genres: genreId,
              language: "pt-BR", 
              sort_by: filter,
              "vote_count.gte": filterOther,
              page: num, 
            },
          }
        );

        if (response.data.results) {
          setRecentMovies(response.data.results);
        } else {
          setRecentMovies([]);
        }
      } catch (error) {
        console.error("Erro ao buscar filmes recentes:", error);
      }
    };

    fetchRecentMovies();
  }, [genreId, filter, filterOther, num]);

  return (
    <div>
      {recentMovies.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {recentMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Nenhum filme recente encontrado.</p>
      )}
    </div>
  );
}

export default MoviesRecent;
