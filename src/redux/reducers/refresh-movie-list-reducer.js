import { REFRESH_MOVIE_LIST } from "../actions/action-type";

const initialState = {
  movieList: [
    {
      id: "title",
      title: "genre",
      synopsis: 0,
      poster: "https://picsum.photos/200"
    },
  ]
};

function refreshMovieListReducer(state = initialState, action) {
  switch (action.type) {
    case REFRESH_MOVIE_LIST:
      return Object.assign({}, state, {
        movieList: state.movieList.concat(action.payload)
      });
    default:
      return state;
  }
}

export default refreshMovieListReducer;
