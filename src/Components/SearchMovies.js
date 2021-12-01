import React from "react";
import RateMovie from "./RateMovie";
import '../App.css'
import ReactStars from "react-rating-stars-component";

const SearchMovie = ({ setMovieSearch, ratingMovie, setRatingMovie }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="Search">
      <div className="search-name">
        <h4> Search by title </h4>
        <input
          className="SearchInput"
          placeholder="What movie are you looking for ?"
          type="text"
          onChange={(e) => setMovieSearch(e.target.value)}
        ></input>
      </div>
      <div className="search-rate">
        <h4> Search by rating </h4>
        <ReactStars
                        className='starRatingComp'
                        name="Rating"
                        starCount={5}
                        value={ratingMovie}
                    />
        <RateMovie ratingMovie={ratingMovie} setRatingMovie={ratingChanged} />
      </div>
    </div>
  );
};

export default SearchMovie;