import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Projects from './components/Projects'


function App() {
  const [page, setpage] = useState('about')
  const changepage = (page)=> setpage(page);
  
  
 

  return (
    <>

      <BrowserRouter>
    <div>
      <Header currentpage={page} setpage={changepage}/>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>

        
      </Routes>
    </div>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App



