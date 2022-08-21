import animeList from './dummy-data';
import MovieCard from './MovieCard';

const App = () => {
  return (
    <div className='container my-5'>
      <h1 className='text-center'>Anime List</h1>
      <div className='container my-5'>
        <div id='daftar-anime' className='row'>
          {animeList.map((item) => (
            <div key={item.mal_id} className='col-lg-3 col-md-4 col-sm-6 col-12 my-3'>
              <MovieCard movie={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
