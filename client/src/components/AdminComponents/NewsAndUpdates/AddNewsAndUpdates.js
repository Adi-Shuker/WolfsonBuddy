import Header from "../../UsersComponents/Header";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import React from "react";
import PresentDoctor from "../../PresentDoctor";
import styled from "styled-components";

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
  function submitHandle() {}
  const fields = ["כותרת", "תאריך", "תיאור", "קישור לאתר חיצוני"];
  return (
    <div>
      <Header />
      <AddNewAndUpdatesDiv className="AddNewAndUpdates">
        <div className="leftDiv">
          <div className="title">תצוגה מקדימה:</div>
          <PresentDoctor className="preview" doctor={"doc1"} />
          <Button>סיום</Button>
        </div>

        <div className="rightDiv">
          <div className="title">הוספת עדכון:</div>
          <Form onSubmit={submitHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {fields.map((item) => {
                return (
                  <div>
                    <Form.Control
                      className="text-right"
                      type="text"
                      placeholder={item}
                    />
                  </div>
                );
              })}
            </Form.Group>
            <Button>תצוגה מקדימה</Button>
          </Form>
        </div>
      </AddNewAndUpdatesDiv>
    </div>
  );
};
export default AddNewsAndUpdates;
