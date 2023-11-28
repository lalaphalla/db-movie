import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./home";
import Movie from "./pages/Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
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
