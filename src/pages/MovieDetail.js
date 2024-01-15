import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import MovieDetailsInfo from "../components/MovieDetailsInfo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ReviewList from "../components/ReviewList";
import RelatedMovies from "../components/RelatedMovies";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { totalMovies, loading, movieReviews, similarMovies } = useSelector(
    (state) => state.movie
  );
  const { id } = useParams();
  console.log("similarMovies", similarMovies);

  const [activeTab, setActiveTab] = useState("reviews");
  const clickReviews = () => {
    setActiveTab("reviews");
  };
  const clickRelatedMovies = () => {
    setActiveTab("relatedMovies");
  };

  useEffect(() => {
    dispatch(movieAction.getMovies(id));
  }, [dispatch, id]);

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
            <Link to="/">HOME</Link>
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
      {/* test */}
      <div className="p-100">
        <Container>
          <Row>
            <MovieDetailsInfo movies={totalMovies} />
          </Row>
          <Row className="movie-details">
            <div>
              <button
                className={`review-tab ${
                  activeTab === "reviews" ? "active" : ""
                }`}
                onClick={clickReviews}
              >
                REVIEWS ({movieReviews.results.length})
              </button>
              <button
                className={`review-tab ${
                  activeTab === "relatedMovies" ? "active" : ""
                }`}
                onClick={clickRelatedMovies}
              >
                RELATED MOVIES ({similarMovies.results.length})
              </button>
            </div>
            <div>
              {activeTab === "reviews" && (
                <ReviewList reviews={movieReviews.results} />
              )}
              {activeTab === "relatedMovies" && (
                <RelatedMovies movies={similarMovies.results} id={id} />
              )}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetail;
