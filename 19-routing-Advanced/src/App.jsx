import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
       
      {/* Nested */}
       <Route path='/product' element={<Product />}>
        <Route path='men' element={<Men />}/>
        <Route path='women' element={<Women />}/>
        <Route path='kids' element={<Kids />}/>
        </Route>

        {/* If any route is not Found */}
        <Route path='*' element={<NotFound />}/>
        {/* <Route path='/contact' element={<Contact />}/> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App