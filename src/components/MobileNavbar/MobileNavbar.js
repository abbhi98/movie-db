
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from '../Navbar/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../Search/Search';
import { useState } from 'react';
import '../MobileNavbar/MobileNavbar.css'


const MobileNavbar = ({filterMovies}) =>{
    const [isOpen,toggleDrawer]= useState(false)
    const [searchEnabled,toggleSearchBox]= useState(false)

    return (
        <div id="topbar" className='d-flex justify-between'>
                {!searchEnabled && <SearchIcon className="search-icon" onClick={()=>toggleSearchBox(true)}/>}
                {searchEnabled && <Search searchEnabled="true" toggleSearchBox={toggleSearchBox} filterMovies={filterMovies}/>}
                {!searchEnabled && <MenuIcon onClick={()=>toggleDrawer(true)} />}
                <Drawer
                anchor='right'
                open={isOpen}
                className="mobile-sidemenu"
                onClose={()=>toggleDrawer(false)}
                >
                    <Navbar />
                </Drawer>

        </div>
    )
}
export default MobileNavbar