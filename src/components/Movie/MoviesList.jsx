import { MovieDataSet } from "../data/MovieDataSet";
import Movie from "./Movie";
import "./movies.css";

const MoviesList = () => {
  return (
    <div className="container">
      {MovieDataSet.map(
        ({
          id,
          src,
          link,
          imageAlt,
          title,
          rating,
          year,
          description,
          duration,
          genre,
        }) => {
          return (
            <Movie
              key={id}
              src={src}
              imageAlt={imageAlt}
              title={title}
              rating={rating}
              year={year}
              description={description}
              link={link}
              duration={duration}
              genre={genre}
            />
          );
        }
      )}
    </div>
  );
};

export default MoviesList;
