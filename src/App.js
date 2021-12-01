import './App.css';
import Header from './Components/Header';
import MoviesCon from"./Components/MoviesCon";
import SearchMovie from "./Components/SearchMovies";
import {useState} from 'react';
import AddMovie from "./Components/AddMovies";
import MovieList from "./Components/MovieList";
function App() {
  const [movieData, setMovieData] = useState(MoviesCon);
  const [searchMovie, setMovieSearch] = useState("");
  const [ratingMovie, setRatingMovie] = useState(1);
  const adding = (e, newMovie) => {
    e.preventDefault();
    setMovieData([...movieData, newMovie]);
  };
  return (
    <div className="App">
      <Header />
      <div>
        <SearchMovie
          setMovieSearch={setMovieSearch}
          ratingMovie={ratingMovie}
          setRatingMovie={setRatingMovie}
        />
      </div>
      <AddMovie adding={adding} />
      <MovieList movieData={movieData} movieSearch={searchMovie} ratingMovie={ratingMovie} />
   </div>
  );
}

export default App;
