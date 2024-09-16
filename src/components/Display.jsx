import React from "react";
import { Star } from "phosphor-react";
const Display = ({ movieDetails }) => {
  // console.log(movieDetails);
  return (
    <div>
      <div className="movie-container">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt=""
        />
        <div className="texter">
          <h2 className="title">{movieDetails.original_title}</h2>
          <div className="deets">
            <div className="more-deets">{movieDetails.release_date}</div>
            <div className="more-deets">{movieDetails.popularity}</div>
            <div className="more-deets">
              <Star className="star" size={32} weight="fill" color="yellow" />
            </div>
          </div>
          <div className="overview">{movieDetails.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Display;
