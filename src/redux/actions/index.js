import { REFRESH_MOVIE_LIST } from './action-type';
import { getMovies } from '../../apis/api-handlers/movies-apis-handler';

export function refreshMovieList () {
  return (dispatch) => {
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