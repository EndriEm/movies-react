import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Categories } from "./pages/Categories";
import { CategoryMovies } from "./pages/CategoryMovies";
import { MovieDetails } from "./pages/MovieDetails";
import { Movies } from "./pages/Movies";
import { PageNotFound } from "./pages/PageNotFound";
import { WatchList } from "./pages/WatchList";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryMovies />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
