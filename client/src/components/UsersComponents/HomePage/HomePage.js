import React from "react";
import {IsAuthenticateContext} from "../../../App";
import {Redirect} from "react-router-dom";
import Header from "../Header.js"
import UserIcon from "../Icons/UserIcon";
import UpcomingAppointment from "./UpcomingAppointment"
import VisualMenu from "./VisualMenu.js"
import styled, { css } from 'styled-components'

const UserIconWrapper = styled.div`
   
   text-align: center;
   display:flex;
  justify-content: center;
`;

const Hello = styled.div`
    text-align: center;
`;

const Content = styled.div`
    
    text-align: center;
    justify-content: center;
`;
const UsersHomePage = () => {
    const userName = "אביב"
    const {isAuthenticated, setIsAuthenticated} = React.useContext(IsAuthenticateContext);
     if (!isAuthenticated){
         return <Redirect to="/"/>
    }
    const token = localStorage.getItem("accessToken")
    fetch('/api/example/user', {
        method: 'GET',
        headers: {"Content-Type": "application/json", "x-access-token": token}
    }).then(res => console.log(res))
        .catch(err => console.log(err))
    return(
        <div className="Users home page">
            <Header/>
            <Hello>
                <UserIconWrapper>
                    <UserIcon/>
                </UserIconWrapper>
                <h2>שלום {userName}</h2>

            </Hello>
    <Content>

        <UpcomingAppointment></UpcomingAppointment>
        <VisualMenu></VisualMenu>



    </Content>
        </div>
    )
}

export default UsersHomePage;