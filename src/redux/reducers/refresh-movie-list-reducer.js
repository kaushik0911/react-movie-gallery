import { REFRESH_MOVIE_LIST, SEARCH_MOVIE } from "../actions/action-types";

const initialState = {
  movieList: []
};

const refreshMovieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_MOVIE_LIST:
      return Object.assign({}, state, {
        movieList: action.payload.movies
      });
    case SEARCH_MOVIE:
      let searchTitle  = action.payload.movie;
      let movies = state.movieList;
      let foundmatch = [];

      for (let i=0; i < movies.length; i++){

        if (movieTitle(movies[i]).match(searchTitle)){
          foundmatch.push(movies[i]);
        }
      }

      return Object.assign({}, {
        movieList: foundmatch
      });
    default:
      return state;
  }
}

const movieTitle = (movie) => {
  return movie.title.replace(/\s/g, '').toLowerCase();
}

export default refreshMovieListReducer;
