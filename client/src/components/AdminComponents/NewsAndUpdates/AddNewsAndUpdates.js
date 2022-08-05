import Header from "../../UsersComponents/Header";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import React from "react";
import PresentDoctor from "../../PresentDoctor";
import styled from "styled-components";
import DeleteNewAndUpdates from "./DeleteNewAndUpdates";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {DepartmentsContext, NewsContext} from "../../../App";

const AddNewAndUpdatesDiv = styled.div`
  justify-content: space-evenly;
  align-items: baseline;
  display: flex;
  .title {
    text-align: right;
    direction: rtl;
    margin-bottom: 10px;
  }
  .rightDiv {
    .dropdown-toggle {
      margin-right: 0px;
      margin-bottom: 10px;
      width: 100%;
      background-color: white;
      color: grey;
      border-color: lightgrey;
    }

    .show > .btn-primary.dropdown-toggle {
      color: grey;
      background-color: white;
      border-color: lightgrey;
      box-shadow: 0px 0px 5px 2px;
    }
    .btn-primary:focus {
      box-shadow: 0px 0px 5px 2px;
    }
  }
  .leftDiv {
    display: grid;
    margin-top: auto;
    .PresentDoctor {
      border: 1px solid black;
    }
  }
`;

const AddNewsAndUpdates = () => {

  const [title, setTitle] = React.useState(null);
  const [content, setContent] = React.useState(null);
  const [link, setLink] = React.useState(null);
  const [startDate, setStartDate] = React.useState(new Date());
  const { news, setNews } = React.useContext(NewsContext);

  function submitHandle(event) {
    event.preventDefault();
    const token = localStorage.getItem("accessToken");
    fetch(`/api/add-news`, {
      method: "POST",
      headers: {"Content-Type": "application/json", "x-access-token": token },
        body: JSON.stringify({
            "title":title,
            "postDate":startDate,
            "content":content,
            "link":link,
        }),
    })
        .then((res) => res.json())
        .then((res) => {
          alert("עדכון נשלח בהצלחה")
        })
        .catch((err) => {
          console.log(err);
        });
  }


  return (
    <div>
      <AddNewAndUpdatesDiv className="AddNewAndUpdates">
        <div className="leftDiv">
          <div className="title">מחיקת עדכון:</div>
          <DeleteNewAndUpdates news={news} setNews={setNews}/>
          <PresentDoctor className="preview" doctor={"doc1"} />
        </div>
        <div className="rightDiv">
          <div className="title">הוספת עדכון:</div>
          <Form onSubmit={(e) => submitHandle(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                  <div>
                    <Form.Control
                      className="text-right"
                      type="text"
                      placeholder={"כותרת"}
                      onChange={(event) => {
                        setTitle(event.target.value)
                      }}
                    />
                  </div>
                <div>
                    <h5>תאריך</h5>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                  <div>
                    <Form.Control
                        className="text-right"
                        type="text"
                        placeholder={"תוכן"}
                        onChange={(event) => {
                          setContent(event.target.value)
                        }}
                    />
                  </div>
                  <div>
                    <Form.Control
                        className="text-right"
                        type="text"
                        placeholder={"קישור לאתר חיצוני"}
                        onChange={(event) => {
                          setLink(event.target.value)
                        }}
                    />
                  </div>

            </Form.Group>
            <Button type="submit">הוסף עדכון</Button>
          </Form>
        </div>
      </AddNewAndUpdatesDiv>
    </div>
  );
};
export default AddNewsAndUpdates;
