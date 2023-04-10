import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className=''>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:id' element={<BlogDetails />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
