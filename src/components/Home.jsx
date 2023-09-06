import React from "react";
import "../components/styles/Home.css";
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';
// import { Route } from "react-router-dom";
// import ProductListing from "./ProductListing";

const Home = () => {
  
  return (
    <>
      <div className="first-div">

        <div className="heading-div">
          <h2>Welcome To Fresh Farms!</h2>
          <h4>Let's Get You Started</h4>
        </div>

        <div className="form-div">
          {/* <label htmlFor="name">Are you a Farmer or Customer?</label> */}
          <h5>Are you a Farmer or Customer?</h5>
          <br />
          {/* <input type="text" placeholder="Enter here" /> */}
          <Link to="/ProductListing">
          <Button color="dark">Farmer</Button>
          </Link>
          <Link to = "/Customer">
          <Button color="dark">Customer</Button>
          </Link>
        </div>

        {/* <div className="btn-div">
          <Button color="dark">Lets Get Started!</Button>
        </div> */}
      </div>
    </>
  );
};

export default Home;
