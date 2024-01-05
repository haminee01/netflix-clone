import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import MovieDetailsInfo from "../components/MovieDetailsInfo";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { totalMovies, loading } = useSelector((state) => state.movie);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  console.log("totalMovies", totalMovies);
  if (loading) {
    return (
      <div className="spinner-center">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div className="movieDetail-background">
      <div className="movieDetail-banner">
        <h1>NETFLIX</h1>
        <ul class="breadcrumb-menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            {totalMovies && (
              <>
                {totalMovies.map((movie, index) => {
                  if (movie.id.toString() === id.toString()) {
                    return <span key={movie.id}>{movie.original_title}</span>;
                  }
                  return null;
                })}
              </>
            )}
          </li>
        </ul>
      </div>
      <MovieDetailsInfo movies={totalMovies}/>
    </div>
  );
};

export default MovieDetail;
