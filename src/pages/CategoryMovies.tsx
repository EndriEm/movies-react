import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "../types";

export function CategoryMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies?categoryId=${params.id}`)
      .then((resp) => resp.json())
      .then((moviesFromServer) => setMovies(moviesFromServer));
  });

  return (
    <section className="movies-container main-wrapper">
      <ul className="movies-container__list">
        {movies.map((movie) => (
          <li>
            <Link to={`/movies/${movie.id}`}>
              <article className="movie-item">
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
