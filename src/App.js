import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieResults from "./pages/MovieResults";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <Header setMovies={setMovies} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<MovieResults movies={movies} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
