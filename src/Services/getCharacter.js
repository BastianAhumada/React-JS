import React, { useEffect, useState } from 'react';


export default async function getCharacter() {

  
  const url = "https://rickandmortyapi.com/api/character?page=1"

  const arraCharacters = []

  return await fetch(url, {
    method: 'GET', headers: {
      'Content-Type': 'application/json'
    }

  }).then(res => res.json())
  .then(
    data => data
  )
}