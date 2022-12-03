import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';

const refs = {
  input: document.querySelector('input#search-box'),
  ul: document.querySelector('.country-list'),
  div: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
let inputValue = '';

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();

  inputValue = e.target.value.trim(); //без зайвих пробілів
  console.log(inputValue);

  if (inputValue === '') {
    clear();
    return;
  }

  fetchCountries(inputValue).then(country => {
    // console.log('country.length', country.length); //Скільки країн введено в інпут

    clear();

    if (country.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      return;
    }

    if (country.length >= 2 && country.length <= 10) {
      createCountries(country);
      return;
    }

    if (country.length < 2) {
      createCountry(country);
      return;
    }
  });
}

function createCountry(countries) {
  const markup = countries.map(
    country =>
      `<div class="country">
    <img class="flag-icon" src="${country.flags.svg}" alt="Flag of ${
        country.name.official
      }" >
    <h1>${country.name.official}</h1>
</div>
<div> 
    <p class="text"><span class="caption">Capital:</span> ${country.capital}</p>
    <p class="text"><span class="caption">Population:</span> ${
      country.population
    }</p>
    <p class="text"><span class="caption">Languages:</span> ${Object.values(
      country.languages
    )}</p>
</div>`
  );
  // .join(''); //При умовах завдання тут виводиться одна країна, тому join можна прибрати

  refs.div.insertAdjacentHTML('beforeend', markup);
}

function createCountries(countries) {
  const markup = countries
    .map(
      country =>
        `<div class="country">
    <img class="flag-icon" src="${country.flags.svg}" alt="Flag of ${country.name.official}" >
    <p class="country-name">${country.name.official}</p>
</div>`
    )
    .join('');

  refs.ul.insertAdjacentHTML('beforeend', markup);
}

function clear() {
  refs.ul.innerHTML = '';
  refs.div.innerHTML = '';
}
function Error() {
  clear();
  Notify.failure('Oops, there is no country with that name');
}
