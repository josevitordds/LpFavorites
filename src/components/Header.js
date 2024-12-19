import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import axios from "axios";

function Header({ setMovies }) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const API_KEY = "6b8d5c74";

  const fetchMovies = async (query) => {
    try {
      const API_URL = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
      const response = await axios.get(API_URL);

      if (response.data.Search) {
        setMovies(response.data.Search);
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

  const handleProfileSubmit = async (e) => {
    navigate("/profile");
  };
  const handleHomeSubmit = async (e) => {
    navigate("/");
  };

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const API_URL = `https://www.omdbapi.com/?s=${value}&apikey=${API_KEY}`;
      const response = await axios.get(API_URL);

      if (response.data.Search) {
        setSuggestions(response.data.Search.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    }
  };

  const handleSuggestionClick = (title) => {
    setSearchValue(title);
    setSuggestions([]);
    fetchMovies(title);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchValue) return;
    fetchMovies(searchValue);
  };

  return (
    <div className="headerPage">
      <div className="logoHeader" onClick={() => handleHomeSubmit()}>
        <h1>lpFavorites</h1>
      </div>
      <form className="pesquisaHeader" onSubmit={handleSearchSubmit}>
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
                onClick={() => handleSuggestionClick(movie.Title)}
              >
                {movie.Title}
              </li>
            ))}
          </ul>
        )}
      </form>
      <div className="perfilHeader">
        <div className="perfilHeader-container" onClick={() => handleProfileSubmit()}>
          <FontAwesomeIcon icon={faUser} className="userIconHeader" />
          <p>perfil</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
