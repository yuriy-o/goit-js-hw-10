import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import fullCard from '../src/templates/full-card.hbs';

import './css/styles.css';

const inputEl = document.querySelector('input#search-box');
const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

fetchCountries();

function onInput(e) {
  const inputValue = e.target.value.trim(); //без зайвих пробілів

  console.log(inputValue);
}
