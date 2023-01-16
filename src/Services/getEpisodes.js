export default function getEpisodes(url) {
  
  return fetch(url, {method: "GET"})
  .then(e => e.json())
  .then(data => data)
  .catch(err => new Error('Error in the Connection'))
}