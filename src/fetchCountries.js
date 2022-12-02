export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/all?fields=name,capital,population,flags,languages`
  )
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
