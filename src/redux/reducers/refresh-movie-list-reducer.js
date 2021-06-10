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
      let title  = action.payload.movie;
      let movies = state.movieList;
      
      movies.filter ((movie) =>
        (this.removeSpaces(movie.title)).includes(title)
      )

      return Object.assign({}, state, {
        movieList: movies
      });
    default:
      return state;
  }
}

export default refreshMovieListReducer;
