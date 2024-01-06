import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`
      );

      const movieDetailsApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      let [
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        genreList,
        movieDetails,
      ] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
        genreApi,
        movieDetailsApi,
      ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
          totalMovies: [
            ...popularMovies.data.results,
            ...topRatedMovies.data.results,
            ...upcomingMovies.data.results,
          ],
          movieDetails: movieDetails.data,
        },
      });
    } catch (error) {
      //에러핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
};
