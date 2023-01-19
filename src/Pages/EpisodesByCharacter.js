import react, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import CharactersByLocation from '../Components/Characters/CharactersByLocation'

export default function EpisodesByCharacter() {

  const { id } = useParams()

  const [location, setLocation] = useState([])

  const URLBASE = `https://rickandmortyapi.com/api/location/${id}`


  useEffect(() => {
    fetch(URLBASE).then((e) => e.json()).then(res => setLocation(res))
  }, [])


  return (
    <>
      <h1> Ubicacion de {location.name} </h1>
      <CharactersByLocation characters={location.residents}>  </CharactersByLocation>
    </>

  )
}