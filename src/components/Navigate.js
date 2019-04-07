import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from "react-materialize"
import { NavLink } from "react-router-dom";
 
export class Navigate extends Component {
  render() {
    return (
      <div>
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="/" className="brand-logo">YOUtility</a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/signIn">Create Listing</NavLink></li>
                        {/* <NavLink to="/createListing"> Create Listing </NavLink> */}
                        {/* <li><NavLink to="/createProviderAccount"> Become a Vendor </NavLink></li> */}
                        <li><NavLink to="/createUser"> Become a User </NavLink></li>
                        <li><NavLink to="/listingsTable"> Looking for a Gig? </NavLink></li>
                        {/* <NavLink to="/createAccount">Create an Account</NavLink> */}
                    </ul>
        
                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Create an Account</a></li>
                    </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigate
