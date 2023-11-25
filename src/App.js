import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
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
