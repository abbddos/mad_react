import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
      <nav className = "Navbar">
        <ul className = "nav-menu">
          <li><Link to = "/" className = "nav-links">Home</Link></li>
          <li><Link to = "/Admin" className = "nav-links">Admin</Link></li>
          <li><Link to = "/Projects" className = "nav-links">Projects</Link></li>
          <li className = "dropdown">
            <button className = "dropbtn nav-button">username placeholder</button>
            <div className = "dropdown-content">
              <Link to = "/Profile" className = "dropdown-link">View Profile</Link>
              <Link to = "/Logout" className = "dropdown-link">Logout</Link>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
  