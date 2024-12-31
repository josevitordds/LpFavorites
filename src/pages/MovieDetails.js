import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieDetails.css";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams(); // Obtém o ID do filme a partir da URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const API_KEY = "a0261dcdeeb25805ffd5a4ecd28d9225";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
        );
        setMovieDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar detalhes do filme:", err);
        setError("Erro ao carregar os detalhes do filme.");
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movieDetails) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <>
      <div className="detailsMovie-page">
        <h2>{movieDetails.title}</h2>
        <div className="detailsMovie-imgInf">
          <div className="detailsMovie-img">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title || movieDetails.original_title}
            />
          </div>
          <div className="detailsMovie-infDetails">
            <p>
              <strong>Data de Lançamento:</strong> {movieDetails.release_date}
            </p>
            <p>
              <strong>Avaliação:</strong> {movieDetails.vote_average}/10
            </p>
            <p>
              <strong>Gêneros:</strong>{" "}
              {movieDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
        <div className="detailsMovie-inf"></div>
      </div>
    </>
  );
}

export default MovieDetails;
