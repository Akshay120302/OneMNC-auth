import React , { useState} from 'react';
import logo from './images/logo.png';
import Menu from './Menu';
import LoginModal from './LoginModal';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Nav.css'

function Nav(props) {

  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const closeLoginModal = () => setShowLoginModal(false);



  const navigate = useNavigate();


  return (
    <>

    <div className="nav">
        <img className = "logo" src={logo} alt = ""/>
        <span className="title">One Mnc</span>
        <input className='searchbar' type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
        {/* <i class="fa-sharp fa-solid fa-magnifying-glass fa-beat"></i> */}
        <i className="fa-solid fa-cart-shopping" onClick={ () => navigate("/Cart")}></i>
        <i className="fa-solid fa-user" onClick={() => setShowLoginModal(true)}></i>
        {showLoginModal && <LoginModal closeLoginModal={closeLoginModal}/>}
        <i className="fa-solid fa-bars" onClick={() => setShowMenu(true)}></i> 
        {showMenu && <Menu closeMenu={closeMenu}/>}
    </div>

    <div className="navBar">
        <ul>
            <Link to = "/">
            <li >Home</li> {/*onMouseOver={openstyle} onMouseLeave={() => setShowMenu(false)}*/}
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