import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Character } from './Components/Characters'
import { Episodes } from './Components/Episodes'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route path='/'>
      <Character />
    </Route>
    <Route path='/Episodes'>
      <Episodes />
    </Route>
  </React.StrictMode>
);
