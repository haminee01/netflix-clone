import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const RelatedMovies = ({ movies, id }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();

  // const goToMovieDetail = () => {
  //   navigate(`/movies/${movies.id}`);
  // };

  return (
    <div>
      <div className="related-movies">
        {movies.map((movie) => (
          <div
            className="movies-card"
            key={movie.id}
            style={{
              backgroundImage: movie.poster_path
                ? `url(https://image.tmdb.org/t/p/w355_and_h200_multi_faces${movie.poster_path})`
                : "none",
              borderRadius: "7px",
            }}
          >
            <div className="over-lay">
              <h2>{movie.title}</h2>
              <div style={{ margin: "10px" }}>
                {movie.genre_ids.map((genreId) => (
                  <Badge key={genreId} className="id-badge" bg="danger">
                    {genreList.find((genre) => genre.id == genreId)?.name}
                  </Badge>
                ))}
              </div>
              <div style={{ marginLeft: "10px" }}>
                <span>
                  <img
                    className="span-margin"
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png"
                    style={{ width: "20px", height: "20px" }}
                  />
                  {movie.vote_average}
                </span>
                <span className="eighteen">
                  {movie.adult ? "19  " : "  under 18"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
