import "./App.css";
import { useState } from "react";
import searchIcon from "./searchIcon.svg";
import MovieCard from "./components/MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=6ce0041b387bdc16ed1d50bd0aed4f0a&language=en-US&page=1&include_adult=false&query=";

// const movie1 = {
//   adult: false,
//   backdrop_path: "/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg",
//   genre_ids: [878, 28, 12],
//   id: 624860,
//   original_language: "en",
//   original_title: "The Matrix Resurrections",
//   overview:
//     "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
//   popularity: 103.1,
//   poster_path: "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
//   release_date: "2021-12-16",
//   title: "The Matrix Resurrections",
//   video: false,
//   vote_average: 6.6,
//   vote_count: 4474,
// };
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();

    setMovies(data.results);
  };

  return (
    <div className="app">
      <h1>Chase's Movie Search</h1>
      <div className="search">
        <input
          type="search"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && search !== "") {
              searchMovies(search);
            } else if (e.key === "Enter" && search === "") {
              alert("Please enter a movie title");
            }
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            if (search.length !== 0) {
              searchMovies(search);
            } else {
              alert("Please enter a movie title");
            }
          }}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" id="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Overview
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" id="modal-body"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
