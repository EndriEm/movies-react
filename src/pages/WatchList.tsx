import { useEffect, useState } from "react";
import { WatchListItem } from "../types";

export function WatchList() {
  const [watchList, setWatchList] = useState<WatchListItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/watchlist?_expand=movie")
      .then((resp) => resp.json())
      .then((watchListFromServer) => setWatchList(watchListFromServer));
  }, []);

  return (
    <section className="watchlist-container">
      <h1>This is you watch list</h1>
      <ul>
        {watchList.map((item) => (
          <li>
            <article className="watchlist-container__item">
              <img src={item.movie.image} alt={item.movie.title} width="90" />
              <p>{item.movie.title}</p>
              <a href={item.movie.trailer}>
                <button className="watchlist-button">Watch trailer</button>
              </a>

              <button
                className="watchlist-button"
                onClick={() => {
                  const todosCopy = structuredClone(watchList);
                  //@ts-ignore
                  const dele = todosCopy.find((dele) => dele.id === item.id);
                  fetch(`http://localhost:4000/watchlist/${item.id}`, {
                    method: "DELETE",
                  })
                    .then((resp) => resp.json())
                    .then(() => location.reload());
                }}
              >
                REMOVE
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
