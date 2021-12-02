import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import API from '../../API/API';
import Carousel from 'react-elastic-carousel';
import './Movies.css'

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      let yearMovie = localStorage.getItem("movieYear");
      if (yearMovie === null)
        localStorage.setItem("movieYear", 2021)
      await API.GetMovie(localStorage.getItem("movieYear")).then((response) =>{
        setMovies(response.results)
      }, (error) => {
        console.log(error)
      })
    }
    getMovies()
  },[])

  return (
    <Grid>
      <Carousel className='movies'>
                {movies.map(item =>
                    <div key={item.id}>
                        <img className="imgMovie" alt='Movies' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                        <div className='titleMovie'>
                          {item.title}
                        </div>
                    </div>)}
            </Carousel>
    </Grid>
  );
}