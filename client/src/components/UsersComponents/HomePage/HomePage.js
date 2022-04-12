import React, {useState} from "react";
import {IsAuthenticateContext, UserDetailsContext} from "../../../App";
import {Redirect} from "react-router-dom";
import NavigationPopup from "./NavigationPopup.js";

const UsersHomePage = () => {
    const [buttonNavigationPopup, setButtonNavigationPopup] = useState(false);
    const {isAuthenticated, setIsAuthenticated} = React.useContext(IsAuthenticateContext);
    const {userDetails, setUserDetails} = React.useContext(UserDetailsContext);
     if (!isAuthenticated){
         return <Redirect to="/"/>
    }
     const token = localStorage.getItem("accessToken");

    fetch('/api/example/user', {
        method: 'GET',
        headers: {"Content-Type": "application/json", "x-access-token": token}
    }).then(res => console.log(res))
        .catch(err => console.log(err))


    return(
        <div className="users-home-page">
            <h2>Users home page</h2>
            <h2>{userDetails.userName}</h2>
            <h2>{userDetails.email}</h2>
            <button onClick={()=>setButtonNavigationPopup(true)}>open</button>
            <NavigationPopup trigger={buttonNavigationPopup} setTrigger={setButtonNavigationPopup}/>
        </div>
    )
}

export default UsersHomePage;