import React, { useEffect, useState } from 'react';


export default async function getCharacter({url = 'https://rickandmortyapi.com/api/character', status = null} = {}) {

console.log('status', status)

  if (status) {
    const params = `?status=${status}`
    url = `${url}${params}`
  }
  
  return await fetch(url, {
    method: 'GET', headers: {
      'Content-Type': 'application/json'
    }

  }).then(res => res.json())
    .then(
      data => data
    )
}