import { ADD_MOVIE } from './action-type';

export function addMovie(payload) {
  return { type: ADD_MOVIE, payload: payload }
}