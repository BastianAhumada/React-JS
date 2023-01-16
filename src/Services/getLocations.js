export default function Location() {


  return fetch('https://rickandmortyapi.com/api/location', {
    method: 'GET'
  })
  .then(res => res.json() )
  .then(data => data.results)

}