import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const MovieDetailsInfo = ({ movies }) => {
  const { id } = useParams();
  const selectedMovie = movies.find((movie) => movie.id.toString() === id);
  const posterBaseUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

  const { genreList, movieDetails } = useSelector((state) => state.movie);
  console.log("selectedMovie", selectedMovie);
  console.log("movieDetails", movieDetails);

  const getGenreName = (id) => {
    const foundGenre = genreList.find((genre) => genre.id === id);
    return foundGenre ? foundGenre.name : "";
  };

  return (
    <div>
      <Container className="movie-details">
        <Row>
          <Col>
            {selectedMovie ? (
              <img
                className="movie-details-image"
                src={`${posterBaseUrl}${selectedMovie.poster_path}`}
              />
            ) : (
              <div>No image available</div>
            )}
          </Col>
          <Col>
            {selectedMovie && (
              <>
                {selectedMovie.genre_ids.map((id) => (
                  <div className="movie-details-genrebox" key={id}>
                    {getGenreName(id)}
                  </div>
                ))}
              </>
            )}
            <div className="movie-details-title">{selectedMovie?.title}</div>

            <div className="movie-details-infos">
              <span>
                <img
                  className="span-margin"
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png"
                  style={{ width: "25px", height: "25px" }}
                />
                {selectedMovie ? (
                  selectedMovie.vote_average
                ) : (
                  <div>No average available</div>
                )}
              </span>
              <span>
                <FontAwesomeIcon icon={faUsers} className="span-margin" />
                {selectedMovie ? (
                  selectedMovie.popularity
                ) : (
                  <div>No popularity available</div>
                )}
              </span>
              <span className="eighteen">
                {selectedMovie.adult ? "19  " : "  under 18"}
              </span>
            </div>

            <div className="movie-details-overview">
              {selectedMovie?.overview}
            </div>

            <div className="movie-details-other">
              <ul>
                <li>
                  <span className="movie-details-box">Budget</span>
                  {"$"}
                  {movieDetails ? (
                    movieDetails.budget
                  ) : (
                    <span>No budget available</span>
                  )}
                </li>
                <li>
                  <span className="movie-details-box">Revenue</span>
                  {"$"}
                  {movieDetails ? (
                    movieDetails.revenue
                  ) : (
                    <span>No revenue available</span>
                  )}
                </li>
                <li>
                  <span className="movie-details-box">Release Day</span>
                  {selectedMovie ? (
                    selectedMovie.release_date
                  ) : (
                    <span>No date available</span>
                  )}
                </li>
                <li>
                  <span className="movie-details-box">Time</span>
                  {movieDetails ? (
                    movieDetails.runtime
                  ) : (
                    <span>No runtime available</span>
                  )}
                </li>
              </ul>
            </div>

            <button>Watch Trailer</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailsInfo;
