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
const NavModal = styled.div``;

const UsersHomePage = () => {
  const history = useHistory();
  const [surveyAvailable, setSurveyAvailable] = useState(true); //TODO need to be taken from DB
  const { isAuthenticated, setIsAuthenticated } = React.useContext(
    IsAuthenticateContext
  );
  const { isAdmin, setIsAdmin } = React.useContext(IsAdminContext);
  const { userDetails, setUserDetails } = React.useContext(UserDetailsContext);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }else{
    const token = localStorage.getItem("accessToken");
    fetch("/api/user-data-from-token", {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
        .then((res) => {

          return res.json();
        })
        .then((res) => {
          setUserDetails(res)
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const token = localStorage.getItem("accessToken");
  const { username, email, id } = userDetails;

  return (
    (
      <div className="UsersHomePage">
        <Header />
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
          <UpcomingAppointment />
          <VisualMenu className="visualMenuDiv" />
        </Content>
        <Footer />
      </div>
    )
  );
};

export default UsersHomePage;
