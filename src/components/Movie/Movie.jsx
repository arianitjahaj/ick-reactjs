const Movie = ({
  src,
  imageAlt,
  title,
  year,
  duration,
  genre,
  rating,
  description,
  link,
}) => {
  return (
    <div className="movie-card">
      <div className="movie-img">
        <img src={src} alt={imageAlt} />
      </div>
      <div className="movie-details">
        <h1>{title}</h1>
        <div className="movie-content">
          <div className="movie-sub-details">
            <span className="movie-year">{year}</span>
            <span className="movie-duration">{duration}</span>
            <span className="movie-genre-list">{genre}</span>
          </div>
          <div className="movie-rating">
            <span>{"★".repeat(rating)}</span>
          </div>
          <div className="movie-description">
            <p>{description}</p>
          </div>
        </div>

        <a className="movie-link" href={link} target="_blank" rel="noreferrer">
          <button>Watch Trailer</button>
        </a>

      </div>
    </div>
  );
};

export default Movie;
