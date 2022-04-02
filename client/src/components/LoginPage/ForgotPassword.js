import '../../index.css';
import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ForgotPassword = ()=>{
    const [userDetails, setUserDetails] = useState({email:"", password: ""});
    const history = useHistory();

    const submitHandle = e=>{
        e.preventDefault();
        fetch('/api/update_password', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(userDetails)
        }).then((res) => {
            if(res.status !== 200){
                alert('דואר אלקטרוני לא קיים במערכת');
                return;
            }
            return res.json();
        }).then((data)=>{
            if(data[0].row_count === 1){
                history.push("/");
                alert('הסיסמא שונתה בהצלחה');
            }else{
                alert('דואר אלקטרוני לא קיים במערכת');
            }
        })
    }
    return (
        <>
            <Container>
                <Row className="text-center">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={submitHandle}>
                            <img className='mb-5' src={require('../../images/wolfsonBuddyLogo.jpg')} width="100%"
                                 height="100%" alt="wolfsonBuddyLogo"/>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="text-right" type="email" placeholder="דואר אלקטרוני"
                                              onChange={e=>setUserDetails({...userDetails, email: e.target.value})}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="text-right"  type="password" placeholder="סיסמא חדשה"
                                              onChange={e=>setUserDetails({...userDetails, password: e.target.value})}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="text-right"  type="password" placeholder="אימות סיסמא"
                                              onChange={e=>setUserDetails({...userDetails, password: e.target.value})}/>
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                שלח
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ForgotPassword;