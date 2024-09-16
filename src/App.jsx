import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieList from "./components/movieList";
import MoviePage from "./components/MoviePage";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movie/:id" element={<MoviePage />}></Route>
          <Route path="/movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error occured</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
