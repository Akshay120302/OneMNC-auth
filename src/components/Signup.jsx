import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "../components/styles/SignUp.css"

const Signup = () => {
  return (
    <div>
          <Container className="topcont" >
            <Card outline className="Cardcomp">
              <CardHeader>
                <h3> Fill Your Details </h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form>
                  {/* Name Field */}
                  <FormGroup>
                    <label htmlFor="name">Enter your Name </label>
                    <Input type="text" placeholder="Enter here" id="name" />
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <label htmlFor="email">Enter your Email </label>
                    <Input type="email" placeholder="Enter here" id="email" />
                  </FormGroup>

                  {/* Password Field */}
                  <FormGroup>
                    <label htmlFor="password">Enter your Password </label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                    />
                  </FormGroup>

                  <Container className="bottomcont">
                    <Button className="btn" color="dark">SignUp</Button>
                    <h5 className="hp">Already Signed Up?</h5>
                    <Button className="btn" color="dark">Login</Button>
                  </Container>
                  
                </Form>
              </CardBody>
            </Card>
          </Container>

    </div>
  );
};

export default Signup;
