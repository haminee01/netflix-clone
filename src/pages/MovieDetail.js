import React, {useEffect} from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { totalMovies } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div className="movieDetail-background">
      <div className="movieDetail-banner">
        <h1>NETFLIX</h1>
        <ul class="breadcrumb-menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <span>{}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
