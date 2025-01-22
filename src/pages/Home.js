import React from "react";
import "../styles/Home.css";
import MoviesRecent from "../components/MoviesRecent";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();


  const handleCatSubmit = async(e)=>{
    navigate(`/cat${e}`);
  }
  return (
    <>
      <div className="homePage">
        <div className="homePage-categors">
          <div className="homePage-nameCat">
            <h2>CATEGORIAS</h2>
          </div>
          <div className="homePage-catCd">
            <section className="homePage-cardCat"  onClick={() => handleCatSubmit("Acao")}>
              <p>Ação</p>
            </section>
            <section className="homePage-cardCat" onClick={() => handleCatSubmit("Comedia")}>
              <p>Comédia</p>
            </section>
            <section className="homePage-cardCat" onClick={() => handleCatSubmit("Drama")}>
              <p>Drama</p>
            </section>
            <section className="homePage-cardCat" onClick={() => handleCatSubmit("Terror")}>
              <p>Terror</p>
            </section>
            <section className="homePage-cardCat" onClick={() => handleCatSubmit("Aventura")}>
              <p>Aventura</p>
            </section>
          </div>
        </div>
        <div className="homePage-movies">
          <div className="homePage-movies-recents">
            <div className="homePage-movies-recentsName">
              <h2>Recents</h2>
            </div>
            <div className="homePage-movies-recentCards">
              <MoviesRecent filter={""} />
            </div>
          </div>
          <div className="homePage-movies-good">
            <div className="homePage-movies-goodName">
              <h2>Most Famous</h2>
            </div>
            <div className="homePage-movies-goodCards">
              <MoviesRecent filter={"vote_average.desc"} filterOther={1000}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
