import React from 'react'

const Header = ({title}) => {
  return (
    <header className='bg-gray-800 bg-opacity-50 border-b border-gray-600 shadow-lg'>
     <div className='max-w-7xl mx-auto p-4 sm:px-5 lg:px-7'>
        <h1 className='font-semibold text-2xl text-gray-200'>{title}</h1>
    </div> 
    </header>
  )
}

export default Header
