import React, { useState } from "react";
import { IsAuthenticateContext, UserDetailsContext} from "../../../App";
import { Redirect } from "react-router-dom";
import UserIcon from "../Icons/UserIcon";
import UpcomingAppointment from "./UpcomingAppointment";
import VisualMenu from "./VisualMenu.js";
import styled, { css } from "styled-components";
import "./HomePage.css";
import Survey from "./Survey";
import { useHistory } from "react-router-dom";
import Header from '../Header.js';

export const IsAdminContext = React.createContext({});

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
  }
  const token = localStorage.getItem("accessToken");
  const { username, email, id } = userDetails;

  const clickedSurvey = () => {
    console.log("onClickSurvey");
  };
  return (
    console.log(userDetails) || (
      <div className="UsersHomePage">
        <Header />
        <Hello className="helloDiv">
          <div className={"survey-" + surveyAvailable}>
            <LeftDiv className="leftDivSurvey">
              {surveyAvailable ? (
                <Survey />
              ) : null}
            </LeftDiv>
            <RightDiv className="rightDiv vertical-center">
              <div className="IconWrapper">
                <UserIcon />
              </div>

              <div className="helloAndUsername">???????? {username}</div>

            </RightDiv>
          </div>
        </Hello>
        <Content>
          <UpcomingAppointment />
          <VisualMenu className="visualMenuDiv" />
        </Content>
      </div>
    )
  );
};

export default UsersHomePage;
