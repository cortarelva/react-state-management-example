import React,{useState, useContext} from 'react';
import {MovieContext} from '../components/MovieContext';

const Nav = () =>{

  const [movies, setMovies] = useContext(MovieContext);

  return(
    <div className="navbar navbar-expand-sm bg-dark">
        <h3 className="head">cortarelva</h3>
        <p className="list">List of Movies: {movies.length}</p>
    </div>
      
  );
}



export default Nav;