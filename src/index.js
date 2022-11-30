import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});

console.log(searchParams.toString());

function fetchCountries(name) {
  return fetch(`https://restcountries.com/#api-endpoints-v3-name`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(console.log);
}
