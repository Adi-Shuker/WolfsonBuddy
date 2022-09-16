import "../../index.css";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  IsAdminContext,
  IsAuthenticateContext,
  UserDetailsContext,
} from "../../App";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

export const AddinAdminDiv = styled.div`
  width: 100px;
  height: 100px;
  background: pink;
  border: 1px solid red;
`;

const AddingAdminForm = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const history = useHistory();
  const submitHandle = (e) => {
    e.preventDefault();
    fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    }).then((res) => {
      if (res.status === 200) {
        alert("הרישום בוצע בהצלחה!");
        history.push("/");
      } else if (res.status === 400) {
        alert("דואר אלקטרוני כבר קיים במערכת");
      } else {
        alert("יש למלא את כל השדות");
      }
    });
  };
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={submitHandle}>
              <p>יש להכניס את פרטי איש הצוות עבורו יווצר משתמש</p>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="text-right"
                  type="text"
                  placeholder="שם מלא"
                  onChange={(e) =>
                    setUserInput({ ...userInput, username: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="text-right"
                  type="email"
                  placeholder="דואר אלקטרוני"
                  onChange={(e) =>
                    setUserInput({ ...userInput, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="text-right"
                  type="password"
                  placeholder="סיסמא"
                  onChange={(e) =>
                    setUserInput({ ...userInput, password: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="text-right"
                  type="password"
                  placeholder="אימות סיסמא"
                  onChange={(e) =>
                    setUserInput({ ...userInput, password: e.target.value })
                  }
                />
              </Form.Group>

              <Button variant="success btn-block" type="submit">
                צור משתמש אדמין חדש
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddingAdminForm;
