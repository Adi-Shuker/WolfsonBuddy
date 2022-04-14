import React, { useState } from "react";
import { IsAuthenticateContext, UserDetailsContext } from "../../../App";
import { Redirect } from "react-router-dom";
import Header from "../Header.js";
import UserIcon from "../Icons/UserIcon";
import UpcomingAppointment from "./UpcomingAppointment";
import VisualMenu from "./VisualMenu.js";
import styled, { css } from "styled-components";
import NavigationPopup from "./NavigationPopup.js";
import SideMenu from "../SideMenu";

const UserIconWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Hello = styled.div`
  text-align: center;
`;

const Content = styled.div`
  .visualMenuDiv {
    display: flex;
    justify-content: center;
  }
`;
const UsersHomePage = () => {
  const [buttonNavigationPopup, setButtonNavigationPopup] = useState(false);

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

  return (
    console.log(userDetails) || (
      <div className="Users home page">
        <Header />
        <Hello>
          <UserIconWrapper>
            <UserIcon />
          </UserIconWrapper>
          <h2>שלום {userName}</h2>
        </Hello>
        <Content>
          <UpcomingAppointment></UpcomingAppointment>
        </Content>
        <VisualMenu className="visualMenuDiv"></VisualMenu>
        <div className="users-home-page">
          <button onClick={() => setButtonNavigationPopup(true)}>open</button>
          <NavigationPopup
            trigger={buttonNavigationPopup}
            setTrigger={setButtonNavigationPopup}
          />
        </div>
      </div>
    )
  );
};

export default UsersHomePage;
