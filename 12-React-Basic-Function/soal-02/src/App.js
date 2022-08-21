import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      setIsloading(true);
      const url = 'https://api.jikan.moe/v3/top/anime';
      const res = await fetch(url);
      const data = await res.json();
      setMovieList(data.top);
      setIsloading(false);
    };

    fetchMovieList();
  }, []);
  return (
    <div className='container my-5'>
      <h1 className='text-center'>Anime List</h1>
      <div className='container my-5'>
        <div id='daftar-anime' className='row'>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            movieList.map((item) => (
              <div key={item.mal_id} className='col-lg-3 col-md-4 col-sm-6 col-12 my-3'>
                <MovieCard movie={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
