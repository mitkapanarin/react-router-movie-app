import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    name: 'The Boy with stripped pijamas',
    genre: 'Drama',
    rating: '9.2/10',
  },
  {
    id: 2,
    name: 'Avatar: The Way of Water',
    genre: 'Action',
    rating: '9.3/10',
  },
  {
    id: 3,
    name: 'The Batman',
    genre: 'Action',
    rating: '9.0/10',
  },
];

function Movies() {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
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
      <Link to="/movies/new">New Movie</Link>
    </div>
  );
}

export default Movies;
