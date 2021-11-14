export function register(user) {
  return fetch("/singup", { method: "POST" }).then((data) => data.json());
}

export function login(user) {
  return fetch("/singin", { method: "POST" }).then((data) => data.json());
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
