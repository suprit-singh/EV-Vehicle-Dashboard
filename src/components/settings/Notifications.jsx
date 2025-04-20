import React, { useState } from 'react'
import SettingFrame from './SettingFrame'
import { Bell } from 'lucide-react'
import Toogle from './Toogle'

const Notifications = () => {
    const [notification, setnotification] = useState({
        push: true,
        email: false,
        sms: true
    })
    return (
        <SettingFrame icon={Bell} title={"Notifications"}>
            <Toogle
                Label={"Push Notifications"}
                isOn={notification.push}
                onToggle={()=>setnotification({...notification, push:!notification.push})} />

            <Toogle
                Label={"Email Notifications"}
                isOn={notification.email}
                onToggle={()=>setnotification({...notification, email:!notification.email})} />

            <Toogle
                Label={"SMS Notifications"}
                isOn={notification.sms}
                onToggle={()=>setnotification({...notification, sms:!notification.sms})} />
        </SettingFrame>
    )
}

export default Notifications
