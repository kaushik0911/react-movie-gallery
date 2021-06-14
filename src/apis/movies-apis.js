import { apiInstance } from './api';

export async function getMoviesApi () {
  return apiInstance.get('/movies');
}

export async function searchMoviesApi (title) {
  return apiInstance.get('/search', { params: {title: title} });
}
