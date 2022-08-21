import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          {/* Route jika URL path yang dicari tidak ada dan akan menuju component Not Found */}
          <Route path='/movies/:id' element={<Movie />} />{' '}
          {/* Route movie dengan id Param yang akan menuju ke halaman pada component pages/Movie */}
          <Route path='/' element={<Home />} />{' '}
          {/* Route homepage yang akan menuju ke halaman pada component pages/Home */}
          <Route path='/movies' element={<MovieList />} />{' '}
          {/* Route movies yang akan menuju ke halaman pada component pages/MovieList */}
        </Routes>
      </div>
    </div>
  );
}
