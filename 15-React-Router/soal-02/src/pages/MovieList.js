import { useLocation } from 'react-router-dom';
import QueryString from 'qs';

import MovieCard from '../components/MovieCard';
import MovieListFilter from '../components/MovieListFilter';

import movies from '../dummy-data';

const MovieList = () => {
  const { search } = useLocation();
  const shows = [10, 20, 30];
  const categories = ['TV', 'Movie'];
  const fields = ['title', 'score'];
  const params = QueryString.parse(search, { ignoreQueryPrefix: true });
  const filter = {
    category: params.category || categories[0],
    sort: params.sort || fields[0],
    show: parseInt(params.show) || shows[0],
  };
  let filteredMovies = movies.filter((item) => item.type === filter.category);
  const sortedMovies = filteredMovies.sort((a, b) => {
    if (filter.sort === 'score') {
      const sa = parseFloat(a.score);
      const sb = parseFloat(b.score);

      // descending
      return sb - sa;
    }

    // default by title
    const ta = a.title.toLowerCase();
    const tb = b.title.toLowerCase();

    if (ta < tb) return -1;
    if (ta > tb) return 1;
    return 0;
  });
  const limitMovies = sortedMovies.slice(0, filter.show);
  filteredMovies = limitMovies;

  return (
    <div className='row'>
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12' key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
