import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/settings/Profile'
import Notifications from '../components/settings/Notifications'



const Settings = () => {
  return (
    <div className='flex-1 overflow-auto z-10 relative'>
      <Header title="Settings"/>
      <main className='max-w-4xl mx-auto p-4 lg:px-7'>
        <Profile/>
        <Notifications/>
      </main>
    </div>
  )
}

export default Settings
