import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieResults from "./pages/MovieResults";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MovieCatResults from "./pages/MovieCatResults";

function App() {
  const [movies, setMovies] = useState([]);
  

  return (
    <Router>
      <Header setMovies={setMovies} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<MovieResults movies={movies} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catAcao" element={<MovieCatResults cat={28} />} />
        <Route path="/catDrama" element={<MovieCatResults cat={18} />} />
        <Route path="/catTerror" element={<MovieCatResults cat={27} />} />
        <Route path="/catComedia" element={<MovieCatResults  cat={35}/>} />
        <Route path="/catAventura" element={<MovieCatResults cat={12}/>} />
      </Routes>
    </Router>
  );
}

export default App;
