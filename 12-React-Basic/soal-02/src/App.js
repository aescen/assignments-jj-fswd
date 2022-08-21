import { Component } from 'react';
import MovieCard from './MovieCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieList: [],
    };
  }

  setIsLoading = (loading = true) => {
    this.setState({ isLoading: loading });
  };

  setMovieList = (list = []) => {
    this.setState({ movieList: list });
  };

  fetchMovieList = async () => {
    const url = 'https://api.jikan.moe/v3/top/anime';
    const res = await fetch(url);
    const data = await res.json();
    this.setMovieList(data.top);
  };

  componentDidMount() {
    this.fetchMovieList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movieList !== this.state.movieList) {
      this.setIsLoading(false);
    }
  }

  render() {
    const { isLoading, movieList } = this.state;
    return (
      <div className='container my-5'>
        <h1 className='text-center'>Anime List</h1>
        <div className='container my-5'>
          <div id='daftar-anime' className='row'>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              movieList.map((item) => (
                <div
                  key={item.mal_id}
                  className='col-lg-3 col-md-4 col-sm-6 col-12 my-3'
                >
                  <MovieCard movie={item} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
