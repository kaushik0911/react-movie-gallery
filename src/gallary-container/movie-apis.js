// api handler

import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:3005/api';

export function login(email, password) {
  axios.get('/movies')
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return false;
  });
}
