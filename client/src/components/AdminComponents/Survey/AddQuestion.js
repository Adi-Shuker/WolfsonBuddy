import {Modal, Button, Dropdown, DropdownButton, Form} from "react-bootstrap";
import React, { useState} from "react";

const AddQuestion = ({questionTypes, selectedDepartment})=>{
    const [show, setShow] = useState(false);
    const [selectedQuestionType, setSelectedQuestionType] = useState("1");
    const [text, setText] = useState("");
    const [answersList, setAnswersList] = useState([{ answer: "" }]);

    const handleClose = () => {
        setShow(false);
        setSelectedQuestionType("1");
        handleSelectedQuestionTypeChange("1");
    };

    const handleShow = () => setShow(true);

    const handleAnswersChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...answersList];
        list[index][name] = value;
        setAnswersList(list);
    };

    const handleSelectedQuestionTypeChange = (value) => {
        setSelectedQuestionType(value);
        let list = [];
        if(value=="3"){ //case question type is rating
            ['1','2','3','4','5'].forEach((item,index)=>{
                list[index] = { answer: item };
            })
            setAnswersList(list);
        }else if(value=="1"){ //case question type is matrix
            ['בכלל לא','במידה מועטה','במידה בינונית','במידה רבה','במידה רבה מאוד', 'לא רלוונטי'].forEach((item,index)=>{
                list[index] = { answer: item };
            })
            setAnswersList(list);
        }else if(value=="4"){ //case question type is comment
            setAnswersList([]);
        }else{
            setAnswersList([{ answer: "" }]);
        }
    }

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
                                handleSelectedQuestionTypeChange(e.target.value);
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
                        {answersList.length>0&&selectedQuestionType==="2"?
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
                        </div>:null}
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