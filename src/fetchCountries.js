import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }

      console.log('then#1 → resp', resp);
      return resp.json();
    })
    .then(data => {
      console.log('then#2 → data', data);

      return data;
    })
    .catch(error => {
      console.log('catch → Додаткова помилка в консоль', error);

      Notify.failure('Oops, there is no country with that name');
      return error;
    });
}
