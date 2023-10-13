import React, { useState } from 'react';
import logo from './images/logo.png';
import Menu from './Menu';
import LoginModal from './LoginModal';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './styles/Nav.css'

function Nav() {

  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const closeLoginModal = () => setShowLoginModal(false);
  
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth0();


  return (
    <>

      <div className="nav">
        <img className="logo" src={logo} alt="" />
        <span className="title">One Mnc</span>
        <input className='searchbar' type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-cart-shopping" onClick={() => navigate("/Cart")}></i>
        {isAuthenticated ? (
        // <i className="fa-solid fa-user" onClick={() => setShowLoginModal(true)}></i>
        <img src={user.picture} alt={user.name} className="profile" />
                    ) : (
        <i className="fa-solid fa-user" onClick={() => setShowLoginModal(true)}></i>)}
        {showLoginModal && <LoginModal closeLoginModal={closeLoginModal} />}
        <i className="fa-solid fa-bars" onClick={() => setShowMenu(true)}></i>
        {showMenu && <Menu closeMenu={closeMenu} />}
      </div>

      <div className="navBar">
        <ul>
          <Link to="/">
            <li >Home</li>
          </Link>
          <li >Group</li>

          <li>Products</li>

          <li>Tasks</li>
          <li>Leader Board</li>
        </ul>
      </div>

    </>
  )
}

export default Nav