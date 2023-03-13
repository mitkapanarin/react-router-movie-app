import Home from './components/Home';
import Movies from './components/Movies';
import NotFound from './components/NotFound';
import NewMovie from './components/NewMovie';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Movie from './components/Movie';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="active">
              Movies
            </NavLink>
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
