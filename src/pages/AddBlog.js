import { Formik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const AddBlog = () => {
  let reader = new FileReader()
  const [preview, setPreview] = useState(null)

  function createBlogHaner(values, { resetForm }) {
    const { title, description, bannar } = values

    const formData = new FormData()
    formData.append('bannar', bannar)
    formData.append('title', title)
    formData.append('description', description)

    fetch('http://127.0.0.1:5000/api/v1/blogs', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => toast.success('Blog Added Successfully!'))
      .catch((error) =>
        toast.error(
          error.data?.message || error?.error || 'Something Went Wrong'
        )
      )

    resetForm()
  }

  return (
    <div className='w-10/12 md:w-8/12 mx-auto min-h-[80vh]'>
      <div class='flex items-center justify-center p-12'>
        <div class='mx-auto w-full max-w-[550px] bg-white'>
          <Formik
            initialValues={{ title: '', description: '', bannar: null }}
            onSubmit={createBlogHaner}
          >
            {({ handleChange, values, handleSubmit }) => (
              <form onSubmit={handleSubmit} class='py-6 px-9'>
                <div class='mb-5'>
                  <label
                    for='title'
                    class='mb-3 block text-base font-medium text-gray-800'
                  >
                    Blog Title:
                  </label>
                  <input
                    id='title'
                    type='text'
                    name='title'
                    required
                    onChange={handleChange}
                    value={values.title}
                    placeholder='Enter Your Blog Title'
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='mb-5'>
                  <label
                    for='description'
                    class='mb-3 block text-base font-medium text-gray-800'
                  >
                    Blog Description:
                  </label>
                  <textarea
                    id='description'
                    type='text'
                    name='description'
                    required
                    onChange={handleChange}
                    value={values.description}
                    placeholder='Enter Your Blog Description'
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>

                <div class='mb-6 pt-4 cursor-pointer'>
                  <label class='mb-5 block text-base font-semibold text-[#07074D]'>
                    Upload File
                  </label>

                  <div class='mb-4'>
                    <input
                      type='file'
                      name='bannar'
                      required
                      onChange={(event) => {
                        const file = event.currentTarget.files[0]
                        handleChange({
                          target: {
                            name: 'bannar',
                            value: file,
                          },
                        })
                        // Set for preview
                        reader.onloadend = () => {
                          setPreview(reader.result)
                        }
                        reader.readAsDataURL(file)
                      }}
                      id='file'
                      class='sr-only'
                    />

                    {/* <div class="bg-cover bg-center h-screen" style="background-image: url('/path/to/image.jpg')">
  <!-- Content here -->
</div> */}

                    <label
                      for='file'
                      class='relative flex min-h-[150px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center cursor-pointer bg-cover bg-center'
                      style={preview && { backgroundImage: `url(${preview})` }}
                    >
                      <div>
                        <span class='mb-2 block text-xl font-semibold text-[#07074D]'>
                          Drop files here
                        </span>
                        <span class='mb-2 block text-base font-medium text-[#6B7280]'>
                          Or
                        </span>
                        <span class='inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]'>
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    class='block text-medium bg-indigo-500 rounded text-white px-4 py-2.5 hover:bg-indigo-600'
                  >
                    Add New Blog
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default AddBlog

// title: { type: String, require: true },
// description: { type: String, default: getDescription() },
// bannar: { type: String, default: 'demo_bannar.png' },
// author: { type: String, default: getRandomName() },
// avatar: { type: String, default: getRandomAvatar() },
