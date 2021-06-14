import { REFRESH_MOVIE_LIST, SEARCH_MOVIE } from './action-types';
import { getMovies, searchMovies } from '../../apis/api-handlers/movies-apis-handler';

export const refreshMovieList = (movies) => {
  return {
    type: REFRESH_MOVIE_LIST,
    payload: { movies }
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
      console.log(response);
      dispatch(refreshMovieList(response.data))
    } catch (e) {
      console.log(e);
    }
  }
}
