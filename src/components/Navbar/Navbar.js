import Profile from "../UserProfile/UserProfile";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ListIcon from '@mui/icons-material/List';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import { DeviceContext } from "../../App";

const Navbar = ()=>{
    const isMobile = useContext(DeviceContext);  

    return (
        <nav className={`navbar ${isMobile ? '' : 'sidemenu'}`}>
            <Profile />
            <hr />
            <ListItem label="Discover" selected="true">
                <SearchIcon />
            </ListItem>
            <ListItem label="Playlist">
                <PlaylistPlayIcon />
            </ListItem>
            <ListItem label="Movie">
                <MovieCreationIcon />
            </ListItem>
            <ListItem label="TV Shows">
                <TvIcon />
            </ListItem>
            <ListItem label="My List">
                <ListIcon />
            </ListItem>
            <hr />
            <ListItem label="Watch Later">
                <WatchLaterIcon />
            </ListItem>
            <ListItem label="Recommended">
                <FavoriteBorderIcon />
            </ListItem>
            <hr />
            <ListItem label="Settings">
                <SettingsIcon />
            </ListItem>
            <ListItem label="Log Out">
                <LogoutIcon />
            </ListItem>

        </nav>
    )
}
export default Navbar