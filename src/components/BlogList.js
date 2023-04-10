import React from 'react'
import { useSelector } from 'react-redux'
import { useGetBlogsQuery } from '../features/api/apiSlice'
import BlogItem from './BlogItem'
import Loader from './ui/Loader'

const BlogList = () => {
  const { search } = useSelector((state) => state.filter)
  const { data: blogs, isLoading, isError } = useGetBlogsQuery()

  const regex = new RegExp(search, 'i')
  const filtered = search
    ? blogs.filter((item) => regex.test(item.title))
    : blogs

  return (
    <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>No Todos Available!</p>
      ) : filtered.length === 0 ? (
        <p>You don't have any todos</p>
      ) : (
        filtered.map((blog) => <BlogItem blog={blog} key={blog._id} />)
      )}
    </div>
  )
}

export default BlogList
