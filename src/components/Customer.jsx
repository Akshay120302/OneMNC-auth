import React from 'react';
import './styles/Customer.css';
import Footer from './Footer';
import 'font-awesome/css/font-awesome.min.css';
import Nav from './Nav';

function Customer(props) {


    return (
        <>
            <Nav />

            <div className="Header">

                <div className="slate">

                    <div className="imgScroller">
                        This is Carosel for banners.
                    </div>

                    <div className="table">
                        <div className="row" id="box1">box1</div>
                        <div className="row" id="box2">box2</div>
                        <div className="row" id="box3">box3</div>
                        <div className="row" id="box4">box4</div>
                        <div className="row" id="box5">box5</div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Customer