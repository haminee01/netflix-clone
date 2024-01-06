let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  totalMovies: [],
  loading: true,
  genreList: [],
  movieDetails: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIES_SUCCESS":
      const { popularMovies, topRatedMovies, upcomingMovies } = payload;

      const mergedMovies = [
        ...new Map([
          ...state.totalMovies.map((movie) => [movie.id, movie]),
          ...popularMovies.results.map((movie) => [movie.id, movie]),
          ...topRatedMovies.results.map((movie) => [movie.id, movie]),
          ...upcomingMovies.results.map((movie) => [movie.id, movie]),
        ]).values(),
      ];

      return {
        ...state,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        totalMovies: mergedMovies,
        genreList: payload.genreList,
        loading: false,
        movieDetails: payload.movieDetails,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default movieReducer;
