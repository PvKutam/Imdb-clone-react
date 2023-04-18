import React from 'react'
import Home from "./Pages/Home"
import MovieCategory from './Pages/MovieCategory'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {routePath} from "./Constants/route"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />}/>
        <Route path={routePath.category} element={<MovieCategory />}/>
        <Route path={routePath.invalid} element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App

