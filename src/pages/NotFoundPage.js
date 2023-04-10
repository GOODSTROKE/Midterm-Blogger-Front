import React from 'react'
import { Link } from 'react-router-dom'
import NotfoundIcon from './../assets/images/notfound.svg'

const NotFoundPage = () => {
  return (
    <>
      <div className='min-h-[80vh] flex grow bg-slate-50 dark:bg-navy-900'>
        <main className='grid w-full grow grid-cols-1 place-items-center bg-center'>
          <div className='max-w-[26rem] text-center'>
            <div className='w-full'>
              j
              <img className='w-full' src={NotfoundIcon} alt='not Found' />
            </div>
            <p className='pt-4 text-7xl font-bold text-primary dark:text-accent'>
              404
            </p>
            <p className='pt-4 text-xl font-semibold text-slate-800 dark:text-navy-50'>
              Oops. This Page Not Found.
            </p>
            <p className='pt-2 text-slate-500 dark:text-navy-200'>
              This page you are looking not available
            </p>

            <Link
              to='/'
              className='block mt-4 bg-indigo-500 rounded text-white p-4 hover:bg-indigo-600 font-lg'
            >
              Back To Home
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}

export default NotFoundPage
