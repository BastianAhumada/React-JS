import React, { useEffect, useState } from "react"



export default ({ infoEpisodes }) => {

  const [infoEpisode, setInfoEpisode] = useState([])

  useEffect(() => {
    infoEpisodes.then(e => setInfoEpisode(e))
  }, [])


  return (
    <div className="container">
      <h4 className="mt-2"> Información Episodio </h4>
      <div className="container m-2">
          <div className="row">
          <span> Nombre:  {infoEpisode.name}</span>
          <span> Episodio:  {infoEpisode.episode}</span>
          <span> Lanzado:  {infoEpisode.air_date}</span>
          </div>
      </div>
      <br></br>

    </div>
  )
}