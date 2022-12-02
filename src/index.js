import { fetchCountries } from './fetchCountries';
import { debounce } from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: 'name',
// });

// console.log(searchParams.toString());

fetchCountries();
