import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
const LoginPage = ()=>{
    const [userDetails, setUserDetails] = useState({email:"", password: ""});
    const submitHandle = e=>{
        e.preventDefault();
        fetch('/isExist', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(userDetails)
        }).then((res) => res.json())
            .then((data)=>{
                if(data.length === 1){
                    console.log("Logged in!");
                }else{
                    console.log("details do not match!");
                }
        })
    }
    return (
        <>
            <Container>
                <Row className="md-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={submitHandle}>
                            <img className='mb-5' src={require('../../images/wolfsonBuddyLogo.jpg')} width="100%"
                                 height="100%" alt="wolfsonBuddyLogo"/>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email"
                                              onChange={e=>setUserDetails({...userDetails, email: e.target.value})}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password"
                                              onChange={e=>setUserDetails({...userDetails, password: e.target.value})}/>
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                התחברות
                            </Button><br/><br/>
                            <p className="create-new-user text-right">
                                <a href="#">צור משתמש חדש</a><br/>
                            </p>
                            <p className="forget-password text-right">
                                <a href="#">שכחתי סיסמא</a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginPage;