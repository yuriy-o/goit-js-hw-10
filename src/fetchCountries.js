export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v2/all?fields=name,capital,population,flags,languages`
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
    .catch(console.log);
}
