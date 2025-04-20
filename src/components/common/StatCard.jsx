import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from 'lucide-react'
const StatCard = ({name, icon:Icon, value, color}) => {
  return (
    <motion.div 
    className='bg-gray-800 bg-opacity-50 overflow-hidden shadow-lg border border-gray-600 rounded-xl'
    whileHover={{y:-5}}>
      <div className='p-4 sm:p-6'>
        <span className='flex items-center font-medium text-base text-gray-300'>
            <Icon className='mr-3' size={18} style={{color}}/>
            {name}
        </span>
        <p className='mt-1 font-semibold text-xl text-gray-200'>
            {value}
        </p>
      </div>
    </motion.div>
  )
}

export default StatCard
