import React from 'react'

const Loader = () => {
  return (
    <div class='min-h-[200px] w-full flex justify-center items-center'>
      <div class='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500'></div>
    </div>
  )
}

export default Loader
