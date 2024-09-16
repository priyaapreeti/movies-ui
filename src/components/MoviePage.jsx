import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentMovie(data);
      });
  }, []);
  //   console.log(currentMovie);
  return (
    <>
      <div>
        <img
          className="parent"
          src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
          alt=""
        />
        <div className="child">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
            alt=""
          />
          <div className="content">
            <h1>{currentMovie.original_title}</h1>
            <p>{currentMovie.tagline}</p>
            <p>{currentMovie.runtime} mins</p>
            <p>Release Date: {currentMovie.release_date}</p>
            <p>
              {currentMovie?.genres?.map((one, idx) => (
                <span key={idx} className="genres">
                  {one?.name}
                </span>
              ))}
            </p>
            <h3>Synopsis</h3>
            <p>{currentMovie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
