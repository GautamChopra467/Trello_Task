import React from 'react';
import "./Navbar.css";
import { FiStar, FiUsers } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='main_container_navbar'>
      <div className='left_section_navbar'>
        <h2>Taco's Tacos</h2>
        <FiStar className="star_navbar" />
        <h3>|</h3>
        <FiUsers className="users_navbar" />
        <p>Team Visible</p>
      </div>

      <div className='right_section_navbar'>
        <BsThreeDots className="dots_navbar" />
        <a href='#'>Show Menu</a>
      </div>
    </div>
  )
}

export default Navbar
