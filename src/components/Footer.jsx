import React from 'react'
import './styles/Footer.css'
import FAS from './img/app.jpg';
import GP from './img/play.jpg';
import SPG from './img/pay.png';

function Footer() {
  return (
    <>
        <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up For newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your Email address"/>
            <button className="normal">Sign Up</button>
        </div>
        </section>

        <img className="footer-logo" src="../img/logo.png" alt=""/>
    <footer className="section-p1">
        <div className="col">
            <h4>Contact</h4>
            <p><strong>Address : </strong>Nitte Meenakshi Institute of Technology, Bangalore</p>
            <p><strong>Phone : </strong>+91 9856317520 / +91 8963475201</p>
            <p><strong>Hours : </strong>10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
            </div>

        {/* <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="rowNew">
                <img src="../img/app.jpg" alt=""/>
                <img src="../img/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="img/pay.png" alt=""/>
        </div>        */}
        

        <div className="col">
            <h4>About</h4>
            <a href="https://chat.openai.com/">About Us</a>
            <a href="https://chat.openai.com/">Delivery Information</a>
            <a href="https://chat.openai.com/">Privacy Policy</a>
            <a href="https://chat.openai.com/">Terms & Conditions</a>
            <a href="https://chat.openai.com/">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="https://chat.openai.com/">Sign in</a>
            <a href="https://chat.openai.com/">View cart</a>
            <a href="https://chat.openai.com/">My Wishlist</a>
            <a href="https://chat.openai.com/">Track My Order</a>
            <a href="https://chat.openai.com/">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row1">
                <img src={FAS} alt=""/>
                <img src={GP} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={SPG} alt=""/>
        </div>
    </footer>
    </>
  )
}

export default Footer