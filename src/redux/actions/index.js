import { REFRESH_MOVIE_LIST, SEARCH_MOVIE } from './action-types';
import { getMovies } from '../../apis/api-handlers/movies-apis-handler';


export const refreshMovieList = (movies) => {
  return {
    type: REFRESH_MOVIE_LIST,
    payload: { movies }
  }
}

export const seachMovie = (movie) => {
  return {
    type: SEARCH_MOVIE,
    payload: { movie }
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
