import React, { useState, useEffect } from "react";
import MoviesRecent from "../components/MoviesRecent";
import "../styles/MovieCatResults.css";

function MovieCatResults({ cat }) {
  const [nomeGen, setNomeGen] = useState("");

  const generos = [
    { id: "28", gen: "Ação" },
    { id: "18", gen: "Drama" },
    { id: "35", gen: "Comédia" },
    { id: "27", gen: "Terror" },
    { id: "12", gen: "Ficção Científica" },
  ];

  useEffect(() => {
    const genero = generos.find((g) => g.id === String(cat));
    setNomeGen(genero ? genero.gen : "Gênero Desconhecido");
  }, [cat]);

  return (
    <div className="movieCatResults-page">
      <h2>{nomeGen}</h2>
      <div className="movieCatResults-movies">
        <div className="movieCatResults-components">
          <h2>Lançamentos</h2>
          <p>ver mais</p>
        </div>
        <MoviesRecent genreId={cat} num={1} />
      </div>
      <div className="movieCatResults-movies">
        <div className="movieCatResults-components">
          <h2>Most Famous</h2>
          <p>ver mais</p>
        </div>
        <MoviesRecent filter={"vote_average.desc"} filterOther={1000} genreId={cat} num={2} />
      </div>
      <div className="movieCatResults-movies">
        <div className="movieCatResults-components">
          <h2>Mais Populares</h2>
          <p>ver mais</p>
        </div>
        <MoviesRecent genreId={cat} num={3} />
      </div>
      <div className="movieCatResults-movies">
        <div className="movieCatResults-components">
          <h2>Favoritos</h2>
          <p>ver mais</p>
        </div>
        <MoviesRecent genreId={cat} num={4} />
      </div>
      <div className="movieCatResults-movies">
        <div className="movieCatResults-components">
          <h2>Recomendados</h2>
          <p>ver mais</p>
        </div>
        <MoviesRecent genreId={cat} num={5} />
      </div>
    </div>
  );
}

export default MovieCatResults;
