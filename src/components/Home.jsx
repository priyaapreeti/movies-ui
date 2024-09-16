import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Display from "./Display";
import Card from "./Card";
import MovieList from "./movieList";
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((data) => data.json())
      .then((res) => {
        // console.log(res.results);
        setMovies(res.results);
        // console.log(movies);
      });
  }, []);
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
      >
        {movies.map((movie, id) => (
          <h1  key={id}>
            <Link to={`movie/${movie.id}`}>
            <Display movieDetails={movie}/>
            {/* {console.log(movie.backdrop_path)} */}
            </Link>
          </h1>
        ))}
      </Carousel>
      {/* popular wale cards */}
      {/* <h2>Popular</h2> */}
     <MovieList/>
    </div>
  );
};

export default Home;
