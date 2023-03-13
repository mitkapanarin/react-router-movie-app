import Home from './components/Home';
import Movies from './components/Movies';
import NotFound from './components/NotFound';
import NewMovie from './components/NewMovie';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Movie from './components/Movie';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};


export default App;
