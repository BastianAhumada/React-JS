import React from 'react';
import { Episodes } from './Components/Episodes'
import { ListCharacter } from './Pages/ListCharacters'
import Home from './Components/Home'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}/> 
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/characters" element={<ListCharacter />} />

    </Routes>

  )
}

export default App