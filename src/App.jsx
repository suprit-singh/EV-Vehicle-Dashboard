import {Route, Routes} from 'react-router-dom'
import Overview from './Pages/Overview'
import Sidebar from './components/Sidebar'
import Analytics from './Pages/Analytics'
import Settings from './Pages/Settings'

function App() {

  return (
    <div className="flex bg-gray-900 text-gray-100 h-screen overflow-hidden">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </div>
  )
}

export default App
