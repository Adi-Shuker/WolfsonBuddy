import {Container, Button, Row, Col, Modal, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "./Survey.css"
import NavigationDiv from "../../UsersComponents/HomePage/NavigationDiv";
import { MDBContainer, MDBIframe } from "mdbreact";
import {DepartmentsContext} from "../../../App";
import AddQuestion from "./AddQuestion";
import DeleteQuestion from "./DeleteQuestion";

const EditSurvey = ()=>{
    const [showUserSurvey, setShowUserSurvey] = useState(true);
    const [addQuestionModal, setAddQuestionModal] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [questionTypes, setQuestionTypes] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(1);
    const { departments, setDepartments } = React.useContext(DepartmentsContext);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        fetch(`/api/survey/${selectedDepartment}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-access-token": token },
        })
            .then((res) => res.json())
            .then((res) => {
                setQuestions(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [selectedDepartment]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        fetch(`/api/survey/question_types`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-access-token": token },
        })
            .then((res) => res.json())
            .then((res) => {
                setQuestionTypes(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div className="edit-survey" style={{ display: 'block', padding: 30 }}>
            <Row>
                <Col>
                    <Container>
                        {showUserSurvey ?
                            <MDBContainer className="text-center" style={{ height: '500px' }}>
                                <MDBIframe src={"/userSurvey/"+selectedDepartment} style={{ height: '400px' }}/>
                            </MDBContainer>:null}
                    </Container>
                    <Button onClick={()=>{setShowUserSurvey(!showUserSurvey);}} className="button" variant="outline-primary">תצוגה מקדימה</Button>{' '}
                </Col>
                <Col>

                    <div>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>בחר מחלקה</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e)=> {
                                     console.log(e.target.value);
                                    setSelectedDepartment(e.target.value)
                                }} dir="rtl">
                                    {departments.map((department) =>{
                                        return <option value={department.id}>{department.name}</option>;
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        <AddQuestion questionTypes={questionTypes} selectedDepartment={selectedDepartment}/>
                        <DeleteQuestion questions={questions} setQuestions={setQuestions}/>
                    </div>
                    <Modal
                        className="navModal"
                        show={addQuestionModal}
                        onHide={() => setAddQuestionModal(false)}
                        centered
                    >
                        <Modal.Header className="border-0" closeButton></Modal.Header>
                        <NavigationDiv setTrigger={setAddQuestionModal} />
                    </Modal>

                </Col>

            </Row>
        </div>
    )
}

export default EditSurvey;