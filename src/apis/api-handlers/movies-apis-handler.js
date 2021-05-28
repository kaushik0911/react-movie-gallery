import { getMoviesApi, searchMoviesApi } from "../movies-apis";

export async function getMovies() {
  try {
    var response = await getMoviesApi();
    if (response.data.data.length > 0)
      return { status: true, data: response.data.data };

    return { status: false, data: [] };
  } catch (e) { return e; }
}

export async function searchMovies(title) {
  try {
    var response = await searchMoviesApi(title);
    if (response.data.data.length > 0)
      return { status: true, data: response.data.data };

    return { status: false, data: [] };
  } catch (e) { return e; }
}
