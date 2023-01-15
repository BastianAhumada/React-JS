import React, { useEffect, useState } from 'react';
import { Character } from '../Components/Characters'
import Pagination from '@mui/material/Pagination'
import Link from '@mui/material/Link'

import getCharacter from '../Services/getCharacter';


function ListCharacter() {

  let count = 0
  console.log( 'Cs',count)
  const [characters, setCharacters] = useState()

  useEffect(() => {
    getCharacter({
      page: '3'
    })
    .then(characters => setCharacters(characters.results))
  }, [count])


  if (characters) {
    return (
      <div>
        <Link href="/">Home</Link>
        <Pagination count={10} onClick={() => {
          count++
          console.log(count)
        }} />
        <Character characters={characters}></Character>

      </div>
    )
  }

}

export {
  ListCharacter
} 