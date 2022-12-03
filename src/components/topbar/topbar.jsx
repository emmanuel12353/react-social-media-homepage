import React from 'react';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import './topbar.css';
import Offer from "../img/user/1.jpg";

function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
     <span className="logo">socialsite</span>
      </div>
      <div className="topbarCenter">
       <div className="searchbar">
         <Search className="searchIcon" /> 
        <input placeholder='search for people post or videos' className="searchInput" />
       </div>
       
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">HOME</span>
          <span className="topbarLinks">TIMELINE</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
         <Person className='tik' /> 
          
          </div>
          <div className="topbarIconItems">
           <Chat className='tik' /> 
          
          </div>
          <div className="topbarIconItems">
          <Notifications className='tik' /> 
          
          </div>
        </div>
        <img src={Offer} alt="" className="topbarImg" />
      </div>
      
    </div>
  );
}

export default Topbar;
