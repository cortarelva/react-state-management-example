 import React,{useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = props =>{
  const [movies, setMovies] = useState([
    {
      name: 'Back to the Future',
      price:'€10',
      id: 23124
    },
    {
      name: 'Back to the Future 2',
      price:'€10',
      id:23412
    },
    {
      name: 'Back to the Future 3',
      price:'€10',
      id:34251
    }
  ]);
  return(
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
  );
 }