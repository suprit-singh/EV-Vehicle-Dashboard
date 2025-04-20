import React, { useState } from 'react'
import { BarChart2, Car, CarTaxiFront, DollarSign, Menu, Settings, TrendingUp, User, Users } from 'lucide-react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { span } from 'framer-motion/client'
const SIDEBAR_ITEMS=[
    {name:"Overview", icon:BarChart2, color:"blue", href:"/" },
    {name:"Analytics", icon:TrendingUp, color:"green", href:"/analytics"},
    {name:"Settings", icon:Settings, color:"yellow", href:"/settings"}
]
const Sidebar = () => {
    const[isSidebarOpen, setIsSidebarOpen]=useState(true);
  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen? 'w-64':'w-20'}`}animate={{width:isSidebarOpen? 256:80}}>
        <div className='h-full bg-gray-800 bg-opacity-50 p-4 flex flex-col border-r border-gray-600'>
            <motion.button className='p-1 rounded-full hover:bg-gray-600  max-w-fit' onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={22}/>

            </motion.button>

            <nav className='mt-7 flex-grow'>
                {SIDEBAR_ITEMS.map((item, index)=>(
                    <Link key={item.href} to={item.href}>
                        <motion.div className='flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-600 mb-2 transition-colors'>
                            <item.icon size={20} style={{color:item.color, minWidth:"20px"}}/>
                            {isSidebarOpen && 
                            <motion.span 
                                className='ml-2 text-gray-300 hover:text-gray-200'
                                initial={{opacity:0, width:0}}
                                animate={{opacity:1, width:"auto"}}
                                exit={{opacity:0, width:0}}
                                transition={{duration:0.2, delay:0.3}}>{item.name}
                            </motion.span>}
                        </motion.div>
                        
                    </Link>
                ))}

            </nav>
        </div>
      
    </motion.div>
  )
}

export default Sidebar
