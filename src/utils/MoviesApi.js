import { BEATFILM_URL } from "./consts";

export function getAllFilms() {
  return fetch(BEATFILM_URL).then((data) => data.json());
}
