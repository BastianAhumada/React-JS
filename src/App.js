import React from 'react';
import { Episodes } from './Components/Episodes'
import { ListCharacter } from './Pages/ListCharacters'
import Location from './Components/Locations'
import Home from './Components/Home'
import EpisodesByCharacter from './Components/EpisodesByCharacter'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/characters" element={<ListCharacter />} />
      <Route path="/locations" element={<Location />} />
      <Route path="/EpisodesByCharacter" element={<EpisodesByCharacter   /> } />

    </Routes>

  )
}

export default App