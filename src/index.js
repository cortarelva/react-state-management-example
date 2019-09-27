import React from "react";
import ReactDOM from "react-dom";
import MovieList from "../src/components/MovieList";
import Nav from '../src/components/Nav';
import {MovieProvider} from'../src/components/MovieContext';
import AddMovie from '../src/components/addMovie';
import "./styles.css";

function App() {
  return (
    <MovieProvider>
        <div className="App">
          <Nav />
          <AddMovie />
          <MovieList />
        </div>
    </MovieProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
