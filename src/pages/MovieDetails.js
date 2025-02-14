import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieDetails.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
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
  console.log(movieDetails);
  

  return (
    <>
      <div className="detailsMovie-page">
        <div className="detailsMovie-imgInf">
          <div className="detailsMovie-img">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title || movieDetails.original_title}
            />
          </div>
          <div className="detailsMovie-infDetails">
            <div className="detailsMovie-infoMax">
              <div className="detailsMovie-infDetails-cards">
                <h2>{movieDetails.title}</h2>
                <section className="genreMovie">
                  {movieDetails.genres.map((genre) => genre.name).join(" | ")}
                </section>
              </div>
              <section className="descMovie">
                <p>
                  <strong>Sinopse:</strong> {movieDetails.overview}
                </p>
              </section>
            </div>
            <div className="detailsMovie-dados text-gray-300">
              <span className="bg-gray-700 space-right-10 detailsMovieDadosCard">⭐ {movieDetails.vote_average}/10</span>
              <span className="bg-gray-700 detailsMovieDadosCard">📅 {movieDetails.release_date}</span>
            </div>
            <div className="submitFavorite">
              <button className="bg-red-600 buttonFavorite gap-2"   onClick={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? <FaHeart className="text-white" /> : <FaRegHeart className="text-white" />} 
              Favorito
              </button>
            </div>
          </div>
        </div>
        <div className="detailsMovie-inf"></div>
      </div>
    </>
  );
}

export default MovieDetails;
