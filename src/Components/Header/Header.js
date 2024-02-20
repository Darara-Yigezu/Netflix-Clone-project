import React from 'react'
import "./header.css";
import NetflixLogo from "../../assets/Netflix-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <footer className='header_outer_container'>
        <div className='header_inner_container'>
            <nav className='header_left'>
                <ul>
                   <li><img src={NetflixLogo} width="90" height={28} alt='netflixlogo'></img></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Language</li>
                </ul>
             </nav>
             <section className='header_right'>
              <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneOutlinedIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li> 
              </ul>
             </section>
        </div>
    </footer>
  )
}
export default Header;