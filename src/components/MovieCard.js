import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  const navigate = useNavigate();
  const goToMovieDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div
      onClick={goToMovieDetail}
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h2>{item.title}</h2>
        <div>
          {item.genre_ids.map((id) => (
            <Badge className="id-badge" bg="danger">
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>
            <img
              className="span-margin"
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png"
              style={{ width: "20px", height: "20px" }}
            />
            {item.vote_average}
          </span>
          <span className="eighteen">{item.adult ? "19  " : "  under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
