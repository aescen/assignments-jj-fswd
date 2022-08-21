import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const bg = movie.type === 'TV' ? 'bg-danger' : 'bg-success';

    return (
      <div>
        <div className='card h-100'>
          <img
            src={movie.image_url}
            className='card-img-top'
            alt={`im-${movie.title}`}
          />
          <div className='card-body'>
            <h5 className='card-title'>{movie.title}</h5>
            <h6 className={'card-subtitle mb-2'}>
              <span className={`badge ${bg}`}>{movie.type}</span>
            </h6>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
          </div>
          <div className='card-body'>
            <a
              href={movie.url}
              className='btn btn-primary w-100 text-uppercase'
            >
              readmore
            </a>
          </div>
        </div>
      </div>
    );
  }
}
