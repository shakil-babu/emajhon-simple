import React from 'react'
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const ActiveColor = {
        background:'gray'
    }
    return (
        <>
            <div className="header">
                <img src={logo} alt={logo}/>
            </div>
            <nav>
                <NavLink exact activeStyle={ActiveColor} to="/shop">Shop</NavLink>
                <NavLink activeStyle={ActiveColor} to="/review">Order Review</NavLink>
                <NavLink activeStyle={ActiveColor} to="/inventory">Manage Inventory here</NavLink>
            </nav>
        </>
    )
}

export default Header
