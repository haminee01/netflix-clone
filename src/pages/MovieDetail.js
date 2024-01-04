import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { totalMovies, loading } = useSelector((state) => state.movie);
  const { id } = useParams();
  console.log("id", id);

<<<<<<< HEAD
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
=======
  // 주석 테스트
>>>>>>> 1423367f6b49053c098a9cf622089ffc4eee3fc0
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
    </div>
  );
};

export default MovieDetail;
