import React from "react";
import {IsAuthenticateContext} from "../../../App";
import {Redirect} from "react-router-dom";

const UsersHomePage = () => {
    const {isAuthenticate, setIsAuthenticate} = React.useContext(IsAuthenticateContext);
    if (!isAuthenticate){
        return <Redirect to="login"/>
    }
    return(
        <div className="Users home page">
            <h2>Users home page</h2>
        </div>
    )
}

export default UsersHomePage;