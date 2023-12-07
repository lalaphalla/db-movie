import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import TvShow from "./pages/TvShow";
import People from "./pages/Peoples";
import Search from "./pages/Search";
import Loading from "./components/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/people" element={<People />} />
        <Route path="/tv/:id" element={<TvShow />} />
        <Route path="/search/movie" element={<Search />} />
        <Route path="/loading" element={<Loading />}/>

      </Route>
    </Routes>
  );
}
function MainLayout() {
  return (
    <>
      <MyNav />
      <Outlet />
      <MyFooter />
    </>
  );
}
export default App;
