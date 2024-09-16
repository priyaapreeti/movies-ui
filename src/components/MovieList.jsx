import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((data) => data.json())
      .then((res) => {
        // console.log(res.results);
        setMovieList(res.results);
        // console.log(movieList);
      });
  };
  return (
    <>
      <div className="movie-list">
        <div className="list-title">
          {(type ? type : "POPULAR").toUpperCase()}
        </div>
        <div className="list-card">
          {movieList.map((movie, idx) => (
            <div key={idx}>
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
