import React from 'react';
import "./Header.css";
import netflixLogo from "../../assets/images/netflixlogo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>
    <div className="header_container">
        <div className="header_left">
        <ul>
            <li><img src={netflixLogo}  alt="NetflixLogo" width='100'/></li>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div class="header_right">
           <ul>
            <li><SearchIcon/></li>
             <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
           </ul>
        </div>
    </div>
  </div>

  );
};

export default Header;
