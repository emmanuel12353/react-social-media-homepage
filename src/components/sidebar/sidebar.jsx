import { Bookmark, HelpOutline, RssFeed, WorkOutline } from '@material-ui/icons';
import React from 'react';
import { Event, School, Group, PlayCircleFilledOutlined } from '@material-ui/icons';
import './sidebar.css';
import Offer from "../img/user/1.jpg";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sideWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className='sidebarListItem'>VIDEO</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItem'>BOOKMARK</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className='sidebarListItem'>GROUP</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItem'>feed</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className='sidebarListItem'>QUESTION</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarListItem'>JOB</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className='sidebarListItem'>EVENT</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className='sidebarListItem'>SCHOOL</span>
          </li>
         
     </ul>
     <button className='sidebarButton'>show more</button>
     <hr className='sidebarHr' />
     <ul className="sidebarFriendList">
      <li className="sidebarFriend">
        <img src={Offer} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">
        Jane Doe
      </span>
      </li>
      <li className="sidebarFriend">
        <img src={Offer} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">
        Jane Doe
      </span>
      </li>
      <li className="sidebarFriend">
        <img src={Offer} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">
        Jane Doe
      </span>
      </li>
      <li className="sidebarFriend">
        <img src={Offer} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">
        Jane Doe
      </span>
      </li>
      <li className="sidebarFriend">
        <img src={Offer} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">
        Jane Doe
      </span>
      </li>
      <li className="sidebarFriend">
        <img src={Offer} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">
        Jane Doe
      </span>
      </li>
      
     </ul>
      </div>
    </div>
  );
}

export default Sidebar;
