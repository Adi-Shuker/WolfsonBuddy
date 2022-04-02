import React from "react";
import {IsAuthenticateContext} from "../../../App";
import {Redirect} from "react-router-dom";

const UsersHomePage = () => {
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
            <h2>Users home page</h2>

        </div>
    )
}

export default UsersHomePage;