import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AddIcon from '@material-ui/icons/Add';

const Navbar = ({user,signOut}) => {
	console.log();
	return (
		<div className='Navbar'>
        <h2 className='logo'>ApnaCrafts</h2>
        <ul className='nav-links'>
          <li>
            <NavLink to="/" id='link-active'>
              Home
            </NavLink>
          </li>
        </ul>
        <ul className='Nav-icons'>
          <li>
            <NavLink to="/cart">
              <ShoppingBasketIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <AccountCircleIcon />
            </NavLink>
          </li>
		  {user==='vendor' ? <li>
            <NavLink to="/addProduct">
              <AddIcon />
            </NavLink>
          </li> : null}

		  <li>
			<button onClick={signOut}>Sign Out</button>
		  </li>
        </ul>
      </div>
	)
}

export default Navbar
