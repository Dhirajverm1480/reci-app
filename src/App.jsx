import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import RecipeDetail from './pages/RecipeDetail'

const App = () => {

  const [changeBg, SetChangeBg] = useState(false)

  return (
    <div style={{background:`${changeBg? "#000":"#fff"}`, color:`${changeBg?"#fff":"#000"}`}}>
      <NavBar />
      {/* <button onClick={() => SetChangeBg(true)}>Change</button>
      <button onClick={() => SetChangeBg(false)}> Back</button> */}
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/recipeDetail/:recipeId' element={<RecipeDetail/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
