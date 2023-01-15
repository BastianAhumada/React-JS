import React, { useEffect, useState } from 'react';
import { Character } from '../Components/Characters'
import Pagination from '@mui/material/Pagination'


function ListCharacter() {

  let count = 1

  if (count > 2) {
      let page = count  
      let PagUrlCharacter = page
  }

  const [characters, setCharacter] = useState([])
  // [ 0 = variable, [ 1 = SetVariable]]
  const url = "https://rickandmortyapi.com/api/character?page=1"

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

  return (
    <div className="container">
      <Pagination style={{ justifyContent: "center" }} count={10} onClick={() => {
        console.log(count++)

        if (count > 1) {
          return (
            <Character characters={characters} page={{pageNumber:count}}></Character>
          )
        }
      
      }} />

      <Character characters={characters}></Character>

    </div>
  )
}

export {
  ListCharacter
} 