import { getMoviesApi } from "../apis/movies-apis";

export async function getMovies() {
  try {
    var response = await getMoviesApi();
    if (response.data.data.length > 0)
      return { status: true, data: response.data.data };

    return { status: false, data: new Array() };
  } catch (e) { return e; }
}