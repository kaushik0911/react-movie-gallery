import { REFRESH_MOVIE_LIST, REGISTER } from './action-types';
import { getMovies, searchMovies } from '../../apis/api-handlers/movies-apis-handler';
import { userRegisteration } from '../../apis/api-handlers/users-apis-handler';

export const refreshMovieList = (movies) => {
  return {
    type: REFRESH_MOVIE_LIST,
    payload: { movies }
  }
}

export const registration = (user) => {
  return {
    type: REGISTER,
    payload: { user }
  }
}

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      let response = await getMovies();
      dispatch(refreshMovieList(response.data))
    } catch (e) {
      console.log(e);
    }
  }
}

export const fetchSearchResults = (title) => {
  return async (dispatch) => {
    try {
      let response = await searchMovies(title);
      dispatch(refreshMovieList(response.data))
    } catch (e) {
      console.log(e);
    }
  }
}
