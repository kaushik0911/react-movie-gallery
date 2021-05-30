import { REFRESH_MOVIE_LIST } from "../actions/action-types";

const initialState = {
  movieList: []
};

function refreshMovieListReducer(state = initialState, action) {
  switch (action.type) {
    case REFRESH_MOVIE_LIST:
      return Object.assign({}, state, {
        movieList: action.payload
      });
    default:
      return state;
  }
}

export default refreshMovieListReducer;
