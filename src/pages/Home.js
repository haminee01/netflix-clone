import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className="spinner-center">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="background">
      <Banner movie={popularMovies.results[0]} />

      <h5>Popular Movie</h5>
      <MovieSlide movies={popularMovies} />
      <h5>Top rated Movie</h5>
      <MovieSlide movies={topRatedMovies} />
      <h5>Upcoming Movie</h5>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
};

export default Home;
