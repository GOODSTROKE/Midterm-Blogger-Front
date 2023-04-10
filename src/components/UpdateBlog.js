import React from 'react'
import { Formik } from 'formik'
import toast from 'react-hot-toast'
import { useUpdateBlogMutation } from '../features/api/apiSlice'

const UpdateBlog = ({ id, modalHandler, data }) => {
  const [updateBlog, { isSuccess, isError }] = useUpdateBlogMutation()

  const updateHandler = (values, { resetForm }) => {
    updateBlog({ id, data: values })
    resetForm()
  }

  React.useEffect(() => {
    if (isSuccess) {
      toast.success('Update Success!')
      modalHandler()
    }
    if (isError) {
      toast.error('Failed to Update!')
      modalHandler()
    }
  }, [isSuccess, isError, modalHandler])

  return (
    <>
      <div className='m-2 bg-white rounded-lg shadow-lg overflow-hidden pb-4'>
        <div className='bg-indigo-500 p-4 rounded-b-full rounded-t-2xl'>
          <h1 className='text-white text-2xl font-black'>Update Blog</h1>
        </div>
        {
          <Formik
            initialValues={{
              title: data?.title,
              description: data?.description,
            }}
            onSubmit={updateHandler}
          >
            {({ handleChange, handleSubmit, values }) => (
              <div className='py-6 px-8'>
                <form
                  onSubmit={handleSubmit}
                  className=' text xs lg:text-sm text text-gray-600 space-y-2'
                >
                  <div className='space-y-2'>
                    <label className='block text-left font-semibold'>
                      Blog title
                    </label>
                    <input
                      type='text'
                      name='title'
                      value={values.title}
                      placeholder='Blog Title'
                      onChange={handleChange}
                      className='w-full block rounded border border-gray-300 px-4 py-3 text-gray-600 text-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='block text-left font-semibold'>
                      Blog Description
                    </label>
                    <textarea
                      type='text'
                      name='description'
                      value={values.description}
                      placeholder='Blog Description'
                      onChange={handleChange}
                      className='w-full block rounded border border-gray-300 px-4 py-3 text-gray-600 text-sm focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500'
                      required
                    />
                  </div>
                  <div className='space-x-4'>
                    <button
                      className='bg-indigo-500  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center font-black'
                      onClick={modalHandler}
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='bg-red-400  text-white  rounded-md w-1/3 mx-auto p-2 text-sm space-x-4 text-center font-black'
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        }
      </div>
    </>
  )
}

export default UpdateBlog
