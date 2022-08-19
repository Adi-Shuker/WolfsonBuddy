import React, { useState } from "react";
import {
  IsAdminContext,
  IsAuthenticateContext,
  UserDetailsContext,
} from "../../../App";
import { Redirect } from "react-router-dom";
import UserIcon from "../Icons/UserIcon";
import UpcomingAppointment from "./UpcomingAppointment";
import VisualMenu from "./VisualMenu.js";
import styled, { css } from "styled-components";
import "./HomePage.css";
import Survey from "./Survey";
import { useHistory } from "react-router-dom";
import Header from "../Header.js";
import Footer from "../Footer";

const UsersHomePageDiv = styled.div`
  width: fit-content;
  display: inline-block;
`;

const Hello = styled.div`
  .survey-true {
    padding-top: 10px;
    padding-bottom: 10px;
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
  } else {
    if (Object.keys(userDetails).length === 0) {
      const token = localStorage.getItem("accessToken");
      fetch("/api/user-data-from-token", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setUserDetails(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const token = localStorage.getItem("accessToken");
  const { username, email, id } = userDetails;

  return (
    <div>
      <Header />
      <UsersHomePageDiv className="UsersHomePage">
        <Hello className="helloDiv">
          <div className={"survey-" + surveyAvailable}>
            <LeftDiv className="leftDivSurvey">
              {surveyAvailable ? <Survey /> : null}
            </LeftDiv>
            <RightDiv className="rightDiv vertical-center">
              <div className="IconWrapper">
                <UserIcon />
              </div>

              <div className="helloAndUsername">שלום {username}</div>
            </RightDiv>
          </div>
        </Hello>
        <Content>
          <UpcomingAppointment
            doctorName="חגית ששון"
            departmentName="אף אוזן גרון"
            time="18:30"
            date="14.12.2022"
          />
          <VisualMenu className="visualMenuDiv" />
        </Content>
      </UsersHomePageDiv>
      <Footer />
    </div>
  );
};

export default UsersHomePage;
