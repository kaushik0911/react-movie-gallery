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
    default:
      return state;
  }
}

const movieTitle = (movie) => {
  return movie.title.replace(/\s/g, '').toLowerCase();
}

export default refreshMovieListReducer;
