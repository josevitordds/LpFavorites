import React from "react";
import MoviesRecent from "../components/MoviesRecent";
import "../styles/MovieCatResults.css";

function MovieCatResults({cat}) {
  return (
    <>
      <div className="movieCatResults-page">
        <div className="movieCatResults-movies">
          <div className="movieCatResults-components">
            <h2>Lançamentos</h2>
            <p>ver mais</p>
          </div>
          <MoviesRecent genreId={cat} num={1}/>
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
            <h2>sdnjsndjsn</h2>
            <p>ver mais</p>
          </div>
          <MoviesRecent  genreId={cat} num={3}/>
        </div>
        <div className="movieCatResults-movies">
          <div className="movieCatResults-components">
            <h2>sidnoiasndioans</h2>
            <p>ver mais</p>
          </div>
          <MoviesRecent  genreId={cat} num={4}/>
        </div>
        <div className="movieCatResults-movies">
          <div className="movieCatResults-components">
            <h2>sidoisadioasdi</h2>
            <p>ver mais</p>
          </div>
          <MoviesRecent genreId={cat} num={5}/>
        </div>
      </div>
    </>
  );
}

export default MovieCatResults;
