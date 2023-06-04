import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "../types";

export function MovieDetails() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
      .then((resp) => resp.json())
      .then((movieFromServer) => setMovie(movieFromServer));
  }, []);

  if (movie === null) return <h1>Just a sec... 🙏</h1>;

  return (
    <section className="movie-detail main-wrapper">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-detail__side">
        <h3></h3>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <a href={movie.trailer}>
          <button>Watch trailer</button>
        </a>
        <button
          onClick={() => {
            fetch(`http://localhost:4000/watchList`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ movieId: movie.id }),
            });
          }}
        >
          Add to watch list
        </button>
      </div>
    </section>
  );
}
