const url = "http://178.154.202.223/";

const headers = {
  "Content-Type": "application/json",
};

export function register(user) {
  return fetch(`${url}signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: headers,
  }).then((res) => {
    _checkResponse(res);
  });
}

export function login(user) {
  return fetch(`${url}signin`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: headers,
  }).then((res) => {
    _checkResponse(res);
  });
}

export function getUser() {
  return fetch("/users/me").then((res) => {
    _checkResponse(res);
  });
}

export function updateUser(user) {
  return fetch("/users/me", { method: "PATCH" }).then((res) => {
    _checkResponse(res);
  });
}

export function createMovie(movie) {
  return fetch("/movies").then((res) => {
    _checkResponse(res);
  });
}

export function getMovies(user) {
  return fetch("/movies").then((res) => {
    _checkResponse(res);
  });
}

export function deleteMovie(user) {
  return fetch("/movies").then((res) => {
    _checkResponse(res);
  });
}

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
