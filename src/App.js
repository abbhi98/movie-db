import './App.css';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import { createContext, useEffect, useState } from 'react';

export const DeviceContext = createContext(false)
function App() {

  const [isMobile,updateDeviceType] = useState(false)

  useEffect(()=>{
    updateDeviceType(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ? true : false)
  },[])

  return (
    <div className="App">
      <DeviceContext.Provider value={isMobile}>

        {/* Sidebar for Web View */}
        {!isMobile && <Navbar />} 

        <Movies />
        
      </DeviceContext.Provider>
    </div>
  );
}

export default App;
