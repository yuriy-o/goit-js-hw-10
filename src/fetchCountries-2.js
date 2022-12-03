import { Notify } from 'notiflix/build/notiflix-notify-aio';
const axios = require('axios');

export function fetchCountries(name) {
  return axios
    .get(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    })
    .then(data => {
      console.log(data);

      return data;
    })
    .catch(error => {
      console.log('Додаткова помилка в консоль', error);

      Notify.failure('Oops, there is no country with that name');
      return error;
    });
}
