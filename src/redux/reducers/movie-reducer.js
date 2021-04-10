import { ADD_MOVIE } from "../actions/action-type";

const initialState = {
  movieList: [
    {
      title: "title",
      genre: "genre",
      duration: 0,
      quality: "hd",
      imageURL: "https://picsum.photos/200"
    },
  ]
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return Object.assign({}, state, {
        movieList: state.movieList.concat(action.payload)
      });
    default:
      return state;
  }
}

export default movieReducer;
