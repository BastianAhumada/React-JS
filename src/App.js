import React from 'react';
import { Episodes } from './Components/Episodes'
import { ListCharacter } from './Pages/ListCharacters'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>
        <a href='/characters'>Characters</a>
      </div>} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/characters" element={<ListCharacter />} />

    </Routes>

  )
}

export default App