import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Project from './components/Project'
import Resume from './components/Resume'


function App() {
  const [page, setpage] = useState('About')
  
  
 

  return (
    <>

      <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Project/>}/>
        <Route path='/resume' element={<Resume/>}/>

        
      </Routes>
    </div>
      <div>

      </div>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
