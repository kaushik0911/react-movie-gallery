import { REFRESH_MOVIE_LIST } from './action-types';
import { getMovies } from '../../apis/api-handlers/movies-apis-handler';

export function refreshMovieList () {
  return async (dispatch) => {
    try {
      let response = await getMovies();
      if (response.status){
        dispatch({
          type: REFRESH_MOVIE_LIST,
          payload: response.data
        })
      }
    } catch (e) {
      console.log(e);
    }
  }
}