import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { BiSolidDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
        <BiSolidDonateHeart className='icon_header' /> Charity Admin Dashboard
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="http://localhost:5173/">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="http://localhost:5173/Users">
            <BsFillArchiveFill className='icon' /> Users
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="http://localhost:5173/Events">
            <BsFillGrid3X3GapFill className='icon' /> Events
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="http://localhost:5173/Supporters">
            <BsPeopleFill className='icon' /> Leaderboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon' /> Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
