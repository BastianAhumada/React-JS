import React, { useEffect, useState } from 'react';
import { Character } from './Components/Characters'
import { Episodes } from './Components/Episodes'
import {
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <Episodes/>
  },
]);


export function RouterController() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}  />
    </React.StrictMode>
  )
}


function App() {
  const [characters, setCharacter] = useState([])   // [ 0 = variable, [ 1 = SetVariable]]
  const url = "https://rickandmortyapi.com/api/character"

  const fetchConnect = (url) => {
    fetch(url, {
      method: 'GET', headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => setCharacter(data.results))
      .catch(err => new Error('Failed In Connection API'))
  }

  useEffect(() => {
    console.log('Render')
    fetchConnect(url)
  }, [])


  return (
    <nav>
      <div className="container">
        <Character characters={characters} />
      </div>
    </nav>
  )
}



export default App