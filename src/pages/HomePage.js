import React from 'react'
import SearchBar from './../components/SearchBar'
import Bannar from './../components/Bannar'
import BlogList from './../components/BlogList'

const HomePage = () => {
  return (
    <div className=''>
      <SearchBar />
      <section className='relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3'></div>
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <Bannar />
          <BlogList />
        </div>
      </section>
    </div>
  )
}

export default HomePage
