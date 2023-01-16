import React, { useEffect, useState } from "react"
import GetEpisodes from '../Services/getEpisodes'
import ListEpisodes from '../Pages/ListEpisodes'

export const Episodes = () => {

  const [episodesValue, setEpisodes] = useState([])

  let urlEpisode = 'https://rickandmortyapi.com/api/episode'

  useEffect(() => {
    GetEpisodes(urlEpisode)
      .then(episodes => setEpisodes(episodes.results))
  },[])

  return (
    <div >
      <h1>
        Episodes
      </h1>
      <ListEpisodes episodes={episodesValue}></ListEpisodes>
    </div>
  )
}