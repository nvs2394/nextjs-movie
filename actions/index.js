import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

import { CATEGORY_DATA } from "../resources/1_data";

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 50);
  });
};

export const getMovieById = id => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
};

export const createMovie = movie => {
  return new Promise((resolve, _reject) => {
    return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data)
  });
};

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data)
}
