import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetBlogQuery } from '../features/api/apiSlice'

const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: blog, isLoading, isError } = useGetBlogQuery(id)

  React.useEffect(() => {
    if (!id) navigate('/')
  }, [])

  return (
    <div className='w-10/12 md:w-8/12 mx-auto min-h-[80vh] py-10'>
      {isLoading ? (
        <p>Loading......</p>
      ) : isError ? (
        <p>No Todos Available!</p>
      ) : !blog._id ? (
        <p>You don't have any todos</p>
      ) : (
        <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
          <div className='flex-shrink-0'>
            <img
              className='h-72 w-full object-cover'
              src={blog.bannar}
              alt=''
            />
          </div>

          <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
            <div className='flex-1'>
              <div className='block mt-1'>
                <p className='text-xl font-semibold text-gray-900'>
                  {blog.title}
                </p>
              </div>
            </div>
            <div className='mt-6 flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='h-10 w-10 rounded-full'
                  src={blog.avatar}
                  alt=''
                />
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900 hover:underline cursor-pointer'>
                  {blog.author}
                </p>
                <div className='flex space-x-1 text-sm text-gray-500'>
                  <time>{blog.createdAt} </time>
                  <span aria-hidden='true'> &middot; </span>
                  {/* <span> {blog.timeToRead} </span> */}
                  <span> 2 min read </span>
                </div>
              </div>
            </div>
            <p className='text-base text-justify leading-6 pl-12 pr-4 mt-4'>
              {blog.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogDetails
