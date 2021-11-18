const url = "https://api.zoxdrey.mesto.nomoredomains.club/";

const headers = {
  "Content-Type": "application/json",
};

export function register(user) {
  return fetch(`${url}signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: headers,
  }).then((res) => {
    return _checkResponse(res);
  });
}

export function login(user) {
  return fetch(`${url}signin`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: headers,
  }).then((res) => {
    console.log(res);
    return _checkResponse(res);
  });
}

export function getUser(token) {
  return fetch(`${url}users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  }).then((res) => {
    return _checkResponse(res);
  });
}

export function updateUser(user, token) {
  return fetch(`${url}users/me`, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  }).then((res) => {
    return _checkResponse(res);
  });
}

export function createMovie(movie, token) {
  return fetch(`${url}movies`, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  }).then((res) => {
    return _checkResponse(res);
  });
}

export function getMovies(token) {
  return fetch(`${url}movies`, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  }).then((res) => {
    return _checkResponse(res);
  });
}

export function deleteMovie(id, token) {
  return fetch(`${url}movies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  }).then((res) => {
    return _checkResponse(res);
  });
}

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    return Promise.reject(text || `Ошибка: ${res.status}`);
  });
}
