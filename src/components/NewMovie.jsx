import React, {useState} from 'react';

const NewMovie = () => {
  const [movie, setMovie] = useState({ name: "", genre: "", rating: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(movie);
    setMovie({ name: "", genre: "", rating: "" });
  };

  return (
    <>
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={movie.name} onChange={handleChange} />
        </label>
        <br/>
        <label>
          Genre:
          <input type="text" name="genre" value={movie.genre} onChange={handleChange} />
        </label>
        <br/>
        <label>
          Rating:
          <input type="text" name="rating" value={movie.rating} onChange={handleChange} />
        </label>
        <br/>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default NewMovie