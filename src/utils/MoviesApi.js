import { BEATFILM_URL } from "./consts";

export function getAllFilms() {
  return fetch(BEATFILM_URL).then((res) => {
    return _checkResponse(res);
  });
}

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
