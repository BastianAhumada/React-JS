import React, { Fragment, useEffect, useState } from 'react';

export default function Location({ locationInfo }) {

  const [locations, setLocations] = useState([])


  useEffect(() => {
    const data = fetch(locationInfo)
      .then(e => e.json())
      .then(data => setLocations(data))
  }, [locationInfo])


  for (const key in locations) {
    return (
      <div className='m-3'>
        <hr></hr>
        <h4 style={{ color: "red" }}> Type: {locations.type}</h4>
        <h4 style={{ color: "red" }}> Ubicacion: {locations.name}</h4>
        <h4 style={{ color: "red" }}> 
        Dimension: {
          locations.dimension === "unknown" ? (
            "Desconocido"
          ) : (
            locations.dimension
          )
        }<span>
          </span> </h4>
        <hr></hr>
      </div>

    )
  }

  // return (
  //   <div className='mt-4'>
  //     {/* <h4> Ubicación: {data.name}</h4>
  //     <h4> Tipo: {data.type}</h4>
  //     <h4> Dimensión: {data.dimension}</h4> */}
  //   </div>
  // )
}