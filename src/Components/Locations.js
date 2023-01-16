import React, { Fragment, useEffect, useState } from 'react';
import Locations from '../Services/getLocations'
import ListLocations from '../Pages/ListLocation'

export default function Location() {
  const [locations, setLocations] = useState([])


  useEffect( () => {
    const Res = Locations()
    .then(e => setLocations(e) )
  }, [])


  return (
    <div>
      <h1>Ubicaciones</h1>
      <ListLocations locations={locations} ></ListLocations>
    </div>
  )
}