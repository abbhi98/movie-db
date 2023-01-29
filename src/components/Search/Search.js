import {useState, useEffect } from "react"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Grow from '@mui/material/Grow';
import './Search.css'

const Search = (props)=>{
    
    const [isActive,toggleSearch] = useState(false)
    const [searchText,updateSearchtext] = useState('')
    useEffect(()=>{
        if(props.searchEnabled){
            toggleSearch(true)
        }
    },[props.searchEnabled])


    let timer;

    function handleInputChange(e){
        updateSearchtext(e.target.value)
        debounce(()=>{props.filterMovies(e.target.value)},500) // debounce to reduce api hits
    }

    function debounce(callback,delay){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callback()
        }, delay);
    }

    function handleClose(){
        updateSearchtext('')
        toggleSearch(false)
        props.filterMovies('')
        if(props.searchEnabled){
            props.toggleSearchBox(false)
        }
    }


    return (
        <>
            <div className="search-container d-flex align-center">
                <SearchIcon className="web-search-icon" onClick={()=>toggleSearch(true)}/>
                <Grow
                    in={isActive}
                    style={{ transformOrigin: 'left' }}
                    {...(isActive ? { timeout: 1000 } : {})}
                >
                    <div className='search-input-container d-flex align-center'>
                        <input type="text" placeholder="Title, Movies, Keyword" id="search-input" value={searchText} onChange={handleInputChange}/>
                        <CloseIcon className="close-icon" onClick={handleClose} />
                    </div>
                </Grow>
            </div>
        </>

    )
}   
export default Search