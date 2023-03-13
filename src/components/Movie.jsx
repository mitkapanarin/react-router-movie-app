import React from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Movie {id}</h1>
    </div>
  )
}

export default Movie