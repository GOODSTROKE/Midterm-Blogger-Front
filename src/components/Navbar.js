import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className='bg-slate-100 shadow-md px-6'>
      <div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center'>
        <Link to='/' className='text-lg font-bold'>
          KME DEVELOPER BLOG v1.0
          <br></br>
          From the Mind of Alister Harmon
        </Link>

        <div className='flex items-center space-x-4'>
          {currentPath !== '/' && (
            <Link
              to='/'
              className='block bg-indigo-500 rounded text-white px-4 py-2.5 hover:bg-indigo-600 font-lg'
            >
              Back Home
            </Link>
          )}

          {currentPath !== '/add-blog' && (
            <Link
              to='/add-blog'
              className='block bg-indigo-500 rounded text-white px-4 py-2.5 hover:bg-indigo-600 font-lg'
            >
              Add Blog
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
