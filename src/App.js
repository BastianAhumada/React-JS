import React, { useEffect, useState } from 'react';
import { Character } from './Components/Characters'

function App() {


  const [characters, setCharacter] = useState([])   // [ 0 = variable, [ 1 = SetVariable]]

  const url = "https://rickandmortyapi.com/api/character"

  const fetchConnect = (url) => {
    fetch(url, {
      method: 'GET', headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => setCharacter(data.results))
      .catch(err => new Error('Failed In Connection API'))
  }

  useEffect(() => {
    fetchConnect(url)
  }, [])

  console.log('Characters', characters)

  return (
    <nav>
      <div className="container">
        <Character characters={characters} />
      </div>
    </nav>
  )
}



export default App