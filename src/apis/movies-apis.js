import { apiInstance } from './api';

export async function getMoviesApi () {
  return apiInstance.get('/movies');
}
