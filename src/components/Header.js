import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import axios from "axios";

function Header({ setMovies }) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const TMDB_API_KEY = "a0261dcdeeb25805ffd5a4ecd28d9225";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const searchRef = useRef(null); // Referência para o input de pesquisa

  const fetchMovies = async (query) => {
    try {
      const API_URL = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=pt-BR`;
      const response = await axios.get(API_URL);

      if (response.data.results) {
        setMovies(response.data.results);
        navigate("/search");
      } else {
        setMovies([]);
        navigate("/search");
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      alert("Houve um erro na busca. Tente novamente.");
    }
  };

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const API_URL = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${value}&language=pt-BR`;
      const response = await axios.get(API_URL);

      if (response.data.results) {
        setSuggestions(response.data.results.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    }
  };

  const handleSuggestionClick = (movie) => {
    setSearchValue(movie.title);
    setSuggestions([]);
    navigate(`/movie/${movie.id}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchValue) return;
    fetchMovies(searchValue);
    setSuggestions([]);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="headerPage">
      <div className="logoHeader" onClick={() => navigate("/")}>
        <h1>lpFavorites</h1>
      </div>
      <form className="pesquisaHeader" onSubmit={handleSearchSubmit} ref={searchRef}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="iconHeader" />
        <input
          type="text"
          placeholder="Pesquisar filmes..."
          value={searchValue}
          onChange={handleInputChange}
          className="searcHeader"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((movie, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(movie)}
              >
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </form>
      <div className="perfilHeader">
        <div className="perfilHeader-container" onClick={() => navigate("/profile")}>
          <FontAwesomeIcon icon={faUser} className="userIconHeader" />
        </div>
      </div>
    </div>
  );
}

export default Header;
