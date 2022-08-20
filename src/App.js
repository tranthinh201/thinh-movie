import { useEffect, useState } from "react";
import filmApi, {movieType} from "./api/tmdbApi.js";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import News from "./pages/News/News.jsx";
import Header from "./components/Header/Header.jsx";
import './App.scss'

function App() {
 
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/news" element={<News />} />
          {/* <Route path="/movie/:id" element={<Movie />}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
