import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'

class SideNav extends Component{
    render(){
        return(
            <div className = "vertical-menu">
                <h3 className = "vertical-menu-title">Administration</h3>
                <Link className = "vertical-menu-link" to = "/Admin">Users</Link>
                <Link className = "vertical-menu-link" to = "/Admin">Stake Holders</Link>
                <Link className = "vertical-menu-link" to = "/Admin">Company/Organization Profile</Link>
            </div>
        );
    }
}

export default SideNav;