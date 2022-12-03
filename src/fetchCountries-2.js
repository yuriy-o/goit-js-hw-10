import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const axios = require('axios');
import axios from 'axios';

export function fetchCountries(name) {
  return axios
    .get(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    )
    .then(response => {
      console.log('then#1 → response', response);
      console.log('then#1 → response.data', response.data);

      return response.data;
    })
    .catch(error => {
      console.log('catch → Додаткова помилка в консоль', error);

      Notify.failure('Oops, there is no country with that name');
      return error;
    });
}
