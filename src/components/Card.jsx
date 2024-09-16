import React, { useEffect, useState } from "react";
import { Star } from "phosphor-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1500);
  }, []);

  // console.log(movie);
  return (
    <>
      {isloading ? (
        <div className="card-container">
          {/* <SkeletonTheme color="#202020" highlightColor="#444">  */}
            <Skeleton circle={true} height={30} width={30} count={5} duration={2} />
          {/* </SkeletonTheme> */}
        </div>
      ) : ( 
          <Link to={`/movie/${movie?.id}`} >
            <div className="card-container">
              <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt="img-of-movie"
              />
              <div className="format">
                <h2 className="title">{movie?.original_title}</h2>
                <div className="deets">
                  <div className="more-deets">{movie?.release_date}</div>
                  <div className="more-deets">{movie?.popularity}</div>
                  <div className="more-deets">
                    <Star
                      className="star"
                      size={32}
                      weight="fill"
                      color="yellow"
                    />
                  </div>
                </div> 
              </div>
            </div>
          </Link>
       )} 
    </>
  );
};

export default Card;
