import '../../index.css';
import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {IsAdminContext, IsAuthenticateContext} from "../../App";
import {Link, useHistory} from "react-router-dom";

const LoginPage = ()=>{

    const {isAuthenticate, setIsAuthenticate} = React.useContext(IsAuthenticateContext);
    const {isAdmin, setIsAdmin} = React.useContext(IsAdminContext);
    const [userDetails, setUserDetails] = useState({email:"", password: ""});
    const history = useHistory();

    const submitHandle = e=>{
        e.preventDefault();
        fetch('/isExist', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(userDetails)
        }).then((res) => res.json())
            .then((data)=>{
                if(data.length === 1){
                    setIsAuthenticate(true);
                    if(data[0].is_admin === 1){
                        setIsAdmin(true);
                        history.push("/adminHomePage");
                    }else{
                        history.push("/usersHomePage");
                    }
                }else{
                    alert('שם משתמש או סיסמא שגויים');
                }
        })
    }
    return (
        <>
            <Container>
                <Row className="LoginPage">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={submitHandle}>
                            <img className='mb-5' src={require('../../images/wolfsonBuddyLogo.jpg')} width="100%"
                                 height="100%" alt="wolfsonBuddyLogo"/>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="text-right" type="email" placeholder="דואר אלקטרוני"
                                              onChange={e=>setUserDetails({...userDetails, email: e.target.value})}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="text-right" type="password" placeholder="סיסמא"
                                              onChange={e=>setUserDetails({...userDetails, password: e.target.value})}/>
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                התחברות
                            </Button><br/><br/>
                            <p className="text-center">
                                <Link to="/createNewAccount">צור משתמש חדש</Link>
                            </p>
                            <p className="text-center">
                                <Link to="/forgotPassword">שכחתי סיסמא</Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginPage;