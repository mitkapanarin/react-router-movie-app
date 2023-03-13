import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { movies } from './data';

function Movies() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movies) => (
          <li onClick={()=>navigate(`${movies.id}`)} key={movies.id}>
            <h2>{movies.name}</h2>
            <p>Genre: {movies.genre}</p>
            <p>Rating: {movies.rating}</p>
          </li>
        ))}
      </ul>
      <br/>
      <h1>Movie List</h1>
      <Link to="/movies/1">Movie 1</Link>
      <br/>
      <Link to="/movies/2">Movie 2</Link>
      <br/>
      <Link to="/movies/3">Movie 3</Link>
      <br/>
      <br/>
      <Link to="/movies/new">Add New Movie</Link>
    </div>
  );
}

export default Movies;
