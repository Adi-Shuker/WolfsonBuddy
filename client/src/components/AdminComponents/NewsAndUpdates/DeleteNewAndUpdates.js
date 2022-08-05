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

const DeleteNewAndUpdates = ({news, setNews}) => {
  const [selectedNews, setSelectedNews] = React.useState();
  const newsHeadlineList = news.map((item)=>{return item.title});
  const token = localStorage.getItem("accessToken");
  const handleDelete=()=>{
    fetch(`/api/news/${selectedNews}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json", "x-access-token": token },
        })
      .then((res) => res.json())
            .then((res) => {
                setNews(news.filter((item) => item.id !==  selectedNews));
              alert("נמחק בהצלחה")
            })
            .catch((err) => {
              console.log(err);
            });
  }
  const newsSelect=(e)=> {
      const newsId = news.filter((item)=> {
          return item.title === e
      });
      setSelectedNews(newsId[0].id)
  }

  let newsTitle = "בחר עדכון";
  return (
    <div className="allcomponent">
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
              handleDelete();
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
