const url = "http://178.154.202.223/";

const headers = {
  "Content-Type": "application/json",
  // 'Content-Type': 'application/x-www-form-urlencoded',
};

export function register(user) {
  return fetch(`${url}signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: headers,
  }).then((data) => data.json());
}

export function login(user) {
  return fetch(`${url}signin`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: headers,
  }).then((data) => data.json());
}

export function getUser() {
  return fetch("/users/me").then((data) => data.json());
}

export function updateUser(user) {
  return fetch("/users/me", { method: "PATCH" }).then((data) => data.json());
}

export function createMovie(movie) {
  return fetch("/movies").then((data) => data.json());
}

export function getMovies(user) {
  return fetch("/movies").then((data) => data.json());
}

export function deleteMovie(user) {
  return fetch("/movies").then((data) => data.json());
}
