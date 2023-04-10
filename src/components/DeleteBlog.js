import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useDeleteBlogMutation } from '../features/api/apiSlice'

const DeleteBlog = ({ id, modalHandler }) => {
  const [deleteBlog, { isSuccess, isError }] = useDeleteBlogMutation()

  const deleteHandler = () => {
    deleteBlog(id)
  }

  React.useEffect(() => {
    if (isSuccess) {
      toast.success('Blog Deleted!')
      modalHandler()
    }
    if (isError) {
      toast.error('Failed to Delete!')
      modalHandler()
    }
  }, [isSuccess, isError, modalHandler])

  return (
    <>
      <div className='m-2 bg-white rounded-lg shadow-lg overflow-hidden pb-4'>
        <div className='bg-indigo-500 p-8 rounded-b-full rounded-t-2xl'>
          <span>
            <i className='fa fa-times text-5xl text-red-500'></i>
          </span>
          <h1 className='text-white text-2xl font-black'>Are you sure ? </h1>
        </div>
        <div className='py-6 space-y-4 px-8'>
          <p className='text-sm text-gray-600'>
            Do you really want to delete these records? This process cannot be
            undone.
          </p>
          <div className='space-x-4'>
            <button
              className='bg-indigo-500  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center font-black'
              onClick={modalHandler}
            >
              Cancel
            </button>
            <button
              className='bg-red-400  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center font-black'
              onClick={() => {
                deleteHandler()
                modalHandler()
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteBlog
