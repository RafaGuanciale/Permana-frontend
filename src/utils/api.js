const BASE_URL = import.meta.env.VITE_API_URL;

const handleResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const getCollection = (token) => {
  return fetch(`${BASE_URL}/collection/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const updateUserInfo = (token, name) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  }).then(handleResponse);
};

export const deleteAccount = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const searchPerfumes = (token, search) => {
  return fetch(`${BASE_URL}/perfumes${search ? `?search=${search}` : ""}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const addPerfumeToCollection = (token, perfumeId) => {
  return fetch(`${BASE_URL}/collection`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ perfumeId }),
  }).then(handleResponse);
};

export const removePerfumeFromCollection = (token, perfumeId) => {
  return fetch(`${BASE_URL}/collection/${perfumeId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const getWeather = (lat, lon, token) => {
  return fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};