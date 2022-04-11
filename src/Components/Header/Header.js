import React from 'react';
import '../Header/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './HeaderOptions/Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className="header">
        {/* <h1>This is the header</h1> */}



        <div className="header_left">
            <img src="../Images/web-design.png" alt="logo" />
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder="Search" />
            </div>
        </div>


        <div className="header_right">
            <Headeroptions Icon={HomeIcon} title="home"/>
            <Headeroptions Icon={PeopleIcon} title="My Network"/>
            <Headeroptions Icon={WorkIcon} title="Jobs"/>
            <Headeroptions Icon={ChatIcon} title="Message"/>
            <Headeroptions Icon={NotificationsIcon}  title="Notification"/>
            <Headeroptions avatar="../Images/avatar.png" title="me" />


        </div>




    </div>
  )
}

export default Header