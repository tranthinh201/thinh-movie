import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import filmApi, { category, movieType, tvType } from "../../api/tmdbApi.js";
import './Home.scss'

function Home() {
    const [movie, setMovie] = useState([]);
    const [listMovie, setListMovie] = useState([]);

    const params = {pages: 1};
    useEffect(() => {
      const getFilm = async() => {
        try {
          const respone = await filmApi.getMoviesList(movieType.top_rated, {params});
          setMovie(respone.results)
        } catch(e) {
          console.log(e);
        }
      }
      getFilm();
    }, [])


    useEffect(() => {
      const getListMovies = async() => {
        try {
          const respone = await filmApi.getTvList(tvType.popular, {params});
          setListMovie(respone);
          console.log(respone);
        }
        catch (err) {
          console.log(err);
        }
      }
      getListMovies()
    }, [])
    return (
        <div className='list-card'>
            <Card data={movie}/>
        </div>
    );
}

export default Home;