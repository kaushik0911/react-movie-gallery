import { REFRESH_MOVIE_LIST } from "../actions/action-types";
import { getMovies } from '../../apis/api-handlers/movies-apis-handler';

const initialState = {
  movieList: []
};

const getMovieList = async () => {
  try {
    let response = await getMovies();
    if (response.status){
      return response.data
    } else {
      return []
    }
  } catch (e) {
    console.log(e);
  }
}

const refreshMovieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_MOVIE_LIST:
      console.log(getMovieList().then((value) => console.log(value)))
      return Object.assign({}, state, {
        movieList: getMovieList()
      });
    default:
      return state;
  }
}

export default refreshMovieListReducer;
