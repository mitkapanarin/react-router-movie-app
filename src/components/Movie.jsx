import React from 'react'
import {movies} from './data'
import { useParams } from 'react-router-dom'

const Movie = () => {

    const params = useParams();

    const findData = movies.find((item) => item.id === +params.id);
  return (
    <div>
      <h3>Name: {findData.name}</h3>
      <p>Genre: {findData.genre}</p>
      <p>Rating: {findData.rating}</p>
    </div>
  )
}

export default Movie