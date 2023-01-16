import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link'

import { Character } from '../Components/Characters'
import { Pagination } from '../Components/Pagination'

import getCharacter from '../Services/getCharacter';




function ListCharacter() {

  const [characters, setCharacters] = useState()
  const [info, setInfo] = useState({})

  useEffect(() => {
    getCharacter()
      .then(characters => {
        setCharacters(characters.results)
        setInfo(characters.info)
      })
  }, [])

  const onPrevious = () => {
    getCharacter(info.prev)
    .then(characters => {
      setCharacters(characters.results)
      setInfo(characters.info)
    })
  }

  const onNext = () => {
      getCharacter(info.next)
      .then(characters => {
        setCharacters(characters.results)
        setInfo(characters.info)
      })
  }
  
  if (characters) {
    return (
      <div>
        <Link href="/">Home</Link>
        <Pagination
          prev={info.prev}
          next={info.next}
          onNext={onNext}
          onPrevious={onPrevious} />
        <Character characters={characters}></Character>
        <Pagination></Pagination>

      </div>
    )
  }

}

export {
  ListCharacter
} 