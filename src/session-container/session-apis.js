// api handler

import axios from 'axios';

axios.defaults.baseURL = 'https://rails-movie-gallery.herokuapp.com/api';

export function login(email, password) {
  axios.post('/login', {
    email: email,
    password: password
  })
  .then(function (response) {
    // only to check
    return true;
  })
  .catch(function (error) {
    console.log(error);
    return true;
  });
}
