import React, { useState, useEffect } from 'react';
import { Character } from '@Components/Characters'


export async function OnClickButton() {

  const [characters, setstate] = useState([])

  const getCharacter = fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
    method: 'GET', headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(data => setstate(data.results))
    .catch(err => err)

  const retrieveCharacters = await getCharacter
  console.log('RETRIEVE', retrieveCharacters)
  return (
    <div className='container'>
      <Character characters = {characters}/> 
    </div>
  )
}




// console.log(data.results))