import React from 'react'

const Toogle = ({Label, isOn, onToggle}) => {
  return (
    <div className='flex justify-between py-3'>
        <span className='text-gray-300'>{Label}</span>
        <button className={`
        relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none
        ${isOn ? "bg-indigo-500" : "bg-gray-500"}
        `}
				onClick={onToggle}
			>
				<span
					className={`inline-block size-4 transform transition-transform bg-white rounded-full 
            ${isOn ? "translate-x-6" : "translate-x-1"}
            `}
				/></button>
      
    </div>
  )
}

export default Toogle
