import React, {useEffect, useState} from "react";
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

const getUserAppointment = (userId, setUserAppointmentDetails, setSurveyAvailable)=>{
  const token = localStorage.getItem("accessToken");
  fetch(`/api/appointment/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-access-token": token },
  })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setUserAppointmentDetails(res);
        setSurveyAvailable(true)
      })
      .catch((err) => {
        console.log(err);
      });
}

const UsersHomePage = () => {
  const history = useHistory();
  const [surveyAvailable, setSurveyAvailable] = useState(false);
  const [userAppointmentDetails, setUserAppointmentDetails] = useState([]);
  const { isAuthenticated, setIsAuthenticated } = React.useContext(
    IsAuthenticateContext
  );
  const { userDetails, setUserDetails } = React.useContext(UserDetailsContext);
  const token = localStorage.getItem("accessToken");
  useEffect(()=>{
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      if (Object.keys(userDetails).length === 0) {
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
              getUserAppointment(res.id, setUserAppointmentDetails, setSurveyAvailable)
            })
            .catch((err) => {
              console.log(err);
            });
      }
    }
    getUserAppointment(userDetails.id, setUserAppointmentDetails)
  },[])

  const { username, email, id } = userDetails;

  return (
    <div>
      <div className={"wrapper-above-footer"}>
        <Header />
        <UsersHomePageDiv className="UsersHomePage">
          <Hello className="helloDiv">
            <div className={"survey-" + surveyAvailable}>
              <LeftDiv className="leftDivSurvey">
                {surveyAvailable  ? <Survey id={userAppointmentDetails?userAppointmentDetails[0].department_id : 1}/> : null}
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
            {userAppointmentDetails.length>0?<UpcomingAppointment
                doctorName={userAppointmentDetails[0].doctor_name.replace("/","")}
                departmentName={userAppointmentDetails[0].department_name}
                time={userAppointmentDetails[0].time.substring(0,5)}
                date={userAppointmentDetails[0].date}
            />:""}
            <VisualMenu className="visualMenuDiv" />
          </Content>
        </UsersHomePageDiv>
      </div>
      <Footer />
    </div>
  );
};

export default UsersHomePage;
