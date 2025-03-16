import { useState } from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <div className='content-container'>
        <Content title="Want to Read"/>
        <Content title="Currently Reading"/>
        <Content title="Completed Reads"/>
      </div>
      <Footer />
    </>
  )
}

export default App
