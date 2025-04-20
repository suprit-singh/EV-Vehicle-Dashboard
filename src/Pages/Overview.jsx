import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import { BarChart2, Car, PieChart, Users, Zap } from 'lucide-react'
import StatCard from '../components/common/StatCard'

import PieOverview from '../components/overview/PieOverview'
import ElectricType from '../components/overview/ElectricType'

const Overview = () => {
  return (
    <div className='flex-1 overflow-auto z-10 relative'>
      <Header title="Overview"/>

      <main className='max-w-7xl mx-auto p-4 lg:px-7'>
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}>
            <StatCard name="EV Type" icon={Car} value='Battery EV & Plug-in Hybrid EV' color="red"/>
            <StatCard name="Total Make Companies" icon={Zap} value='38' color="green"/>
            <StatCard name="Max model in year" icon={PieChart} value='2023' color="lightgreen"/>
            
            <StatCard name="Number of models in 2023" icon={BarChart2} value='16791' color="yellow"/>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-4'>
            
            <PieOverview/>
            <ElectricType/>
            

        </div>
      </main>
    </div>
  )
}

export default Overview
