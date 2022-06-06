import {Modal, Button, Dropdown, DropdownButton, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";

const AddQuestion = ({questionTypes, selectedDepartment})=>{
    const [show, setShow] = useState(false);
    const [selectedQuestionType, setSelectedQuestionType] = useState("1");
    const [text, setText] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [answersList, setAnswersList] = useState([{ answer: "" }]);

    const handleAnswersChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...answersList];
        list[index][name] = value;
        setAnswersList(list);
    };

    const handleRemoveAnswer = (index) => {
        const list = [...answersList];
        list.splice(index, 1);
        setAnswersList(list);
    };

    const handleAddAnswer = () => {
        setAnswersList([...answersList, { answer: "" }]);
    };
    const handleAddQuestion=()=>{
        const token = localStorage.getItem("accessToken");
        fetch(`/api/survey/questions`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-access-token": token },
            body: JSON.stringify({
                "department_id":selectedDepartment,
                "question_type_id":selectedQuestionType,
                "text":text,
                "suggested_answers": answersList.map((answer, index) =>
                    answer.answer
                )
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                alert("שאלה נוספה בהצלחה")
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return(
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                הוספת שאלה
            </Button>

            <Modal show={show} onHide={handleClose} dir="rtl">
                <Modal.Header className="border-0" closeButton/>
                <Modal.Title>הוספת שאלה</Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Select aria-label="Default select example" onChange={(e)=> {
                                setSelectedQuestionType(e.target.value)
                            }}>
                                {questionTypes.map((type) =>
                                        <option value={type.id}>{type.name}</option>
                                )}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Label>נוסח השאלה:</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e)=> {
                                setText(e.target.value)
                            }}/>
                        </Form.Group>
                        <div className="form-field">
                            <label htmlFor="answer">תשובות לבחירה</label>
                            {answersList.map((answer, index) => (
                                <div key={index} className="d-flex flex-row">
                                    <div className="p-2">
                                        <input
                                            name="answer"
                                            type="text"
                                            id="answer"
                                            value={answer.text}
                                            onChange={(e) => handleAnswersChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div className="p-2">
                                        {answersList.length !== 1 && (
                                            <Button
                                                type="button"
                                                onClick={() => handleRemoveAnswer(index)}
                                                className="remove-btn"
                                            >
                                                <span>הסר</span>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <Button
                                type="button"
                                onClick={handleAddAnswer}
                                className="add-btn"
                            >
                                <span>הוסף תשובה</span>
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        בטל
                    </Button>
                    <Button variant="primary" onClick={handleAddQuestion}>
                        הוסף שאלה
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default AddQuestion;