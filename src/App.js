import React from 'react'
import {Routes, Route} from 'react-router-dom'

// pages
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Episodes from './components/Episodes'
import Blog from './components/Blog'
import Contact from './components/Contact'
// import Error404 from './components/Error404'
import Footer from './components/Footer'

const App = () => {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='*' element={<Error404/>}/> */}
      </Routes>
      <Footer/>
      </>
  )
}

export default App