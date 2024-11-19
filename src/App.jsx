import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import { useState } from 'react'

function App() {
  
  const [openSidebarToggle, setOpenSidebarTogggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarTogggle(!openSidebarToggle)
  }

  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Home />
      </div>
    </>
  )
}

export default App
