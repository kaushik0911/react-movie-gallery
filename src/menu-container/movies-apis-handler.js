import { searchMoviesApi } from "../apis/movies-apis";

export async function searchMovies(title) {
  try {
    var response = await searchMoviesApi(title);
    if (response.data.data.length > 0)
      return { status: true, data: response.data.data };

    return { status: false, data: [] };
  } catch (e) { return e; }
}