import React from "react";
import ReactDOM from "react-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.relase_date}</p>
      </div>
      <div>
        <img
          src={
            movie.poster_path !== null
              ? "https://image.tmdb.org/t/p/original" + movie.poster_path
              : "https://via.placeholder.com/400"
          }
          alt="movie poster"
        />
      </div>
      <div>
        <span>{movie.vote_average}/10</span>
        <h2>{movie.title}</h2>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => {
            console.log("clicked");
            let modalBody = document.getElementById("modal-body");
            const modalContent = (
              <div>
                <p>{movie.overview}</p>
                <p>Release date: {movie.release_date}</p>
              </div>
            )
            ReactDOM.render(modalContent, modalBody);
          }}
        >
          Overview
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
