import { REFRESH_MOVIE_LIST } from "../actions/action-types";

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

export default refreshMovieListReducer;
