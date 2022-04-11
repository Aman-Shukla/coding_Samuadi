import { Avatar } from '@mui/material';
import React from 'react';
import "../Sidebar/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar"/>
        <h2>Aman Shukla</h2>
        <h4>aman.shukla200115@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who views you</p>
          <payload className="sidebar_statNumber">2,456</payload>
        </div>


        <div className="sidebar_stat">
         <p> views on post</p>
          <p className="sidebar_statNumber">2,222</p>
        </div>
      </div>

      <div className="sidebar_button">
        <p>Recent</p>
      </div>

    </div>
  )
}

export default Sidebar