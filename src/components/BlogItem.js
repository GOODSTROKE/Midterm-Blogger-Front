import React from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon, PencilSquareIcon, EyeIcon } from '@heroicons/react/24/solid'
import Modal from './ui/Modal'
import DeleteBlog from './DeleteBlog'
import UpdateBlog from './UpdateBlog'

const BlogItem = ({ blog }) => {
  // Modal Functionalities
  const [editModal, setEditModal] = React.useState(false)
  const [deleteModal, setDeleteModal] = React.useState(false)
  const [id, setid] = React.useState(null)

  const modalCloser = () => {
    setEditModal(false)
    setDeleteModal(false)
  }
  const setModal = (type) => {
    switch (type) {
      case 'edit':
        modalCloser()
        setEditModal(true)
        break
      case 'delete':
        modalCloser()
        setDeleteModal(true)
        break
      default:
        return false
    }
  }

  return (
    <div className='block flex flex-col rounded-lg shadow-lg overflow-hidden relative'>
      {/* Edit & Delete Modal */}

      {editModal && (
        <Modal open={editModal} modalHandler={modalCloser}>
          <UpdateBlog id={id} modalHandler={modalCloser} data={blog} />
        </Modal>
      )}
      {deleteModal && (
        <Modal open={deleteModal} modalHandler={modalCloser}>
          <DeleteBlog id={id} modalHandler={modalCloser} />
        </Modal>
      )}

      <div className='absolute z-20 flex space-x-1 right-2 top-2'>
        <Link to={`details/${blog._id}`}>
          <EyeIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-blue-500 hover:bg-blue-700 cursor-pointer' />
        </Link>
        <div
          onClick={() => {
            setModal('edit')
            setid(blog._id)
          }}
        >
          <PencilSquareIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-green-500 hover:bg-green-700 cursor-pointer' />
        </div>
        <div
          onClick={() => {
            setModal('delete')
            setid(blog._id)
          }}
        >
          <TrashIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-red-500 hover:bg-red-700 cursor-pointer' />
        </div>
      </div>

      <div className='flex-shrink-0 relative'>
        <img className='h-48 w-full object-cover' src={blog.bannar} alt='' />
        <div class='absolute inset-0 bg-black bg-opacity-20 z-10'></div>
      </div>

      <Link
        to={`details/${blog._id}`}
        className='block flex-1 bg-white p-6 flex flex-col justify-between corsor-pointer'
      >
        <div className='flex-1'>
          <div className='block mt-1'>
            <p className='text-xl font-semibold text-gray-900'>{blog.title}</p>
          </div>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <img className='h-10 w-10 rounded-full' src={blog.avatar} alt='' />
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900 hover:underline cursor-pointer'>
              {blog.author}
            </p>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time>{blog.createdAt} </time>
              <span aria-hidden='true'> &middot; </span>
              <span> 2 min read </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogItem
