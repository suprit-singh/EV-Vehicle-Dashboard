import React from 'react'
import {motion} from 'framer-motion'

const SettingFrame = ({icon:Icon, title, children}) => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 shadow-lg rounded-xl p-5 mb-6 border border-gray-600'
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.6}}>
      
      <div className='mb-4 flex items-center'>
        <Icon className='text-violet-500 mr-4' size={22}/>
        <h1 className='text-gray-200 font-semibold text-xl'>
            {title}
        </h1>
      </div>
      {children}
    </motion.div>
  )
}

export default SettingFrame
