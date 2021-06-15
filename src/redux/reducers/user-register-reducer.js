import { REGISTER } from "../actions/action-types";

const initialState = {
  user: {}
};

const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return Object.assign({}, state, {
        user: action.payload.movies
      });
    default:
      return state;
  }
}

const movieTitle = (movie) => {
  return movie.title.replace(/\s/g, '').toLowerCase();
}

export default userRegistrationReducer;
