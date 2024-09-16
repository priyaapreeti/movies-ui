import React from "react";
import { MonitorPlay } from "phosphor-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="header-stuff">
        <Link to="/" className="elem">
          <MonitorPlay size={32}  />
        </Link>

        <Link className="elem" to="movies/popular">
          Popular
        </Link>
        <Link className="elem" to="movies/top_rated">
          Top Rated
        </Link>
        <Link className="elem" to="movies/upcoming">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Header;
