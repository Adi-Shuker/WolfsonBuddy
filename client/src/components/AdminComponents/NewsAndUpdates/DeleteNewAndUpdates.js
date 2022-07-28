import React, { useState } from "react";
import Header from "../../UsersComponents/Header";
import EditForm from "../EditForm";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const DeleteNewAndUpdatesDiv = styled.div`
  justify-content: space-evenly;
  align-items: baseline;
  display: block;
  .title {
    text-align: right;
    direction: rtl;
    margin-bottom: 10px;
  }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-around;
    direction: rtl;
}`;

const DeleteNewAndUpdates = () => {
  const history = useHistory();
  const newsHeadlineList = ["news1", "news2", "news3"];
  function handleClick(path) {
    history.push(path);
  }

  function newsSelect() {}

  let newsTitle = "בחר עדכון";
  return (
    <div className="allcomponent">
      <Header />
      <DeleteNewAndUpdatesDiv className="DeleteNewAndUpdates">
        <DropdownButton
          className="DropdownButton"
          id="dropdown-departments"
          onSelect={newsSelect}
          title={newsTitle}
          dir="rtl"
        >
          {newsHeadlineList.map(function (name, index) {
            return (
              <Dropdown.Item key={index} eventKey={name}>
                {name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>

        <div className={"buttonLine"}>
          <Button
            onClick={() => {
              //TO-DO delete it from DB
            }}
          >
            {"מחיקת העדכון"}
          </Button>
        </div>
      </DeleteNewAndUpdatesDiv>
    </div>
  );
};

export default DeleteNewAndUpdates;
