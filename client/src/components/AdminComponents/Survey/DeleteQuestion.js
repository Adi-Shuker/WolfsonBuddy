import {Button, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";

const DeleteQuestion=({questions, setQuestions})=>{
    const [show, setShow] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState("-1");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDeleteQuestion = () => {
        const token = localStorage.getItem("accessToken");
        fetch(`/api/survey/questions/${selectedQuestion}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json", "x-access-token": token },
        })
            .then((res) => res.json())
            .then((res) => {
                setQuestions(questions.filter((item) => item.question_id ===  selectedQuestion));
                alert("שאלה נמחקה בהצלחה")
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return(
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                מחיקת שאלה
            </Button>
            <Modal show={show} onHide={handleClose} dir="rtl">
                <Modal.Header className="border-0" closeButton/>
                <Modal.Title>מחיקת שאלה</Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Select aria-label="Default select example" onChange={(e)=> {
                                setSelectedQuestion(e.target.value)
                            }}>
                                {questions.map((question, index) =>{
                                    return <option value={question.question_id}>{question.question_text}</option>;
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        בטל
                    </Button>
                    <Button variant="primary" onClick={handleDeleteQuestion}>
                        מחק שאלה
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default DeleteQuestion;