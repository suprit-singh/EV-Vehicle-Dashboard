import React from 'react'
import SettingFrame from './SettingFrame'
import { User } from 'lucide-react'
const Profile = () => {
  return (
    <SettingFrame icon={User} title={"Profile"}>
      <div className='flex flex-col items-center sm:flex-row mb-5'>
        <img src="images_dashboard.png" alt="Profile" className='w-20 h-20 rounded-full object-cover mr-3'/>
        <div>
           <h2 className='text-gray-200 text-lg font-semibold'>Suprit Kumar</h2>
           <p className='text-gray-500 text-sm'>supritkumar0097@gmail.com</p>
        </div>
        
      </div>
      <button className='bg-blue-500 text-white font-bold border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-300  transition duration-200 w-full sm:w-auto'>Edit Profile</button>
      
    </SettingFrame>
  )
}

export default Profile
