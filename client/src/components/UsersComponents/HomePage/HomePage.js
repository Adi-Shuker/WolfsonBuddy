import React, { useState } from "react";
import { IsAuthenticateContext, UserDetailsContext } from "../../../App";
import { Redirect } from "react-router-dom";
import Header from "../Header.js";
import UserIcon from "../Icons/UserIcon";
import UpcomingAppointment from "./UpcomingAppointment";
import VisualMenu from "./VisualMenu.js";
import styled, { css } from "styled-components";
import NavigationDiv from "./NavigationDiv.js";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Survey from "./Survey";

const Hello = styled.div`
  .survey-true {
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
`;

const RightDiv = styled.div`
  width: 50%;
  position: relative;
`;
const LeftDiv = styled.div`
  width: 50%;
`;
const Content = styled.div`
  margin-right: 5%;
  margin-left: 5%;
  .visualMenuDiv {
    display: flex;
    justify-content: center;
  }
`;

const UsersHomePage = () => {
  const history = useHistory();
  const [surveyAvailable, setSurveyAvailable] = useState(true); //TODO need to be taken from DB
  const { isAuthenticated, setIsAuthenticated } = React.useContext(
    IsAuthenticateContext
  );
  const { userDetails, setUserDetails } = React.useContext(UserDetailsContext);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  const token = localStorage.getItem("accessToken");

  fetch("/api/example/user", {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-access-token": token },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  const { userName, email } = userDetails;

  const clickedSurvey = () => {
    console.log("onClickSurvey");
  };
  return (
    console.log(userDetails) || (
      <div className="UsersHomePage">
        <Hello className="helloDiv">
          <div className={"survey-" + surveyAvailable}>
            <LeftDiv className="leftDivSurvey">
              {surveyAvailable ? (
                <Survey
                  onClick={() => {
                    clickedSurvey({ iconClicked: "/Game" });
                  }}
                />
              ) : null}
            </LeftDiv>
            <RightDiv className="rightDiv vertical-center">
              <div className="IconWrapper">
                <UserIcon />
              </div>
              <h2>שלום {userName}</h2>
            </RightDiv>
          </div>
        </Hello>
        <Content>
          <UpcomingAppointment></UpcomingAppointment>
          <VisualMenu className="visualMenuDiv" history={history}></VisualMenu>
        </Content>
      </div>
    )
  );
};

export default UsersHomePage;
