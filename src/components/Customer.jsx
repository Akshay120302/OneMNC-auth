import React from 'react';
import './styles/Customer.css';
// import Menu from './Menu';
import Footer from './Footer';
// import React , {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Modal from './Modal';
// import Card from './Card';
// import "./styles/Card.css";
// import logo from './images/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import Nav from './Nav';

function Customer(props) {

    // const [showMenu, setShowMenu] = useState(false);

    // const closeMenu = () => setShowMenu(false);

    // const openstyle = () => {
    //     setTimeout(() => setShowMenu(true),3000);
    //     clearTimeout(openstyle);
    // }

    return (
        <>
    {/*<div className="nav">
        <img className = "logo" src={logo} alt = ""/>
        <span className="title">{props.title}</span>
        <input className='searchbar' type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
        {/* <i class="fa-sharp fa-solid fa-magnifying-glass fa-beat"></i> */}
        {/*<i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-bars" onClick={() => setShowMenu(true)}></i> 
        {showMenu && <Menu closeMenu={closeMenu}/>}
    </div>

    <div className="navBar">
        <ul>
            <Link to = "/">
            <li >Home</li> {/*onMouseOver={openstyle} onMouseLeave={() => setShowMenu(false)}*/}
            {/*</Link>
            <li >Group</li>
            <Link to = "/ProductListing">
            <li>Products</li>
            </Link>
            <li>Tasks</li>
            <li>Leader Board</li>
        </ul>
    </div>*/}
    <Nav/>

    <div className="Header">

    
    {/* <marquee>Here latest updates will be displayed</marquee> */}

    <div className="slate"> 
    

    {/* <div className="sideBar">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
    </div> */}
        
    <div className="imgScroller">
       This is Carosel for banners.
    </div>

    <div className="table">
                <div className="row" id="box1">box1</div>
                <div className="row" id="box2">box2</div>
                <div className="row" id="box3">box3</div>
                <div className="row" id="box4">box4</div>
                <div className="row" id="box5">box5</div>
                {/* <!-- <div class="row" id="box6">box6</div> --> */}
            </div>
            
    </div>
    <Footer/>


    </div>





  
</>
  )
}

export default Customer