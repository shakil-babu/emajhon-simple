import React, { useContext } from 'react'
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { userInfoContext } from '../../App';
const Header = () => {
    const ActiveColor = {
        background:'gray'
    }
    // from context
    const [loggedInUser,setLoggedInUser] = useContext(userInfoContext);
    return (
        <>
            <div className="header">
                <img src={logo} alt={logo}/>
            </div>
            <nav>
                <NavLink exact activeStyle={ActiveColor} to="/shop">Shop</NavLink>
                <NavLink activeStyle={ActiveColor} to="/review">Order Review</NavLink>
                <NavLink activeStyle={ActiveColor} to="/inventory">Manage Inventory here</NavLink>
                {loggedInUser.email && <button onClick ={() => setLoggedInUser({})} className='sign-out'>Sign out</button> }
            </nav>
        </>
    )
}

export default Header
