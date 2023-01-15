import React, { useEffect, useState } from 'react';
import { Character } from '../Components/Characters'
import Pagination from '@mui/material/Pagination'
import getCharacter from '../Services/getCharacter';


function ListCharacter() {
  
  const [characters, setCharacters] = useState()
  
  useEffect(() => {
    getCharacter().then(characters => setCharacters(characters.results))
  }, [])

  console.log('Characters', characters)


  if (characters) {
    return (
      <Character characters={characters}></Character>
    )
  }
  
}

export {
  ListCharacter
} 