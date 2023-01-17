import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link'

import { Character } from '../Components/Characters'
import { Pagination } from '../Components/Pagination'

import getCharacter from '../Services/getCharacter';

import Button from '@mui/material/Button'


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


  // Paginatior
  const onPrevious = () => {
    getCharacter({
      url: info.prev
    })
      .then(characters => {
        setCharacters(characters.results)
        setInfo(characters.info)
      })
  }

  const onNext = () => {
    console.log('infoNext', info.next)
    getCharacter({
      url: info.next
    })
      .then(characters => {
        setCharacters(characters.results)
        setInfo(characters.info)
      })
  }
  // 

  const filterByStatus = (status) => {
    getCharacter({
      status: status
    })
      .then(e => {
        setCharacters(e.results)
        setInfo(e.info)
      })
  }

  if (characters) {
    return (
      <div>
        <Link href="/">Home</Link>

        <div className='justify-content-center'>
          <h1 className='text-center' >Filtra por Status</h1>
          <div className='justify-content-center'>
            <div className='text-center mb-3'>
              <Button onClick={() => filterByStatus('alive')}>Alive</Button>
              <Button onClick={() => filterByStatus('unknown')}>Unknown</Button>
              <Button onClick={() => filterByStatus('dead')}>Dead </Button>
            </div>
          </div>

        </div>
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