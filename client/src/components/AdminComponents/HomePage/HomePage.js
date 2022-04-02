import { Redirect } from "react-router-dom"
import React from "react";
import {IsAdminContext, IsAuthenticateContext} from "../../../App";
const AdminHomePage = () => {
    const {isAuthenticated, setIsAuthenticated} = React.useContext(IsAuthenticateContext);
    const {isAdmin, setIsAdmin} = React.useContext(IsAdminContext);
    if (!isAuthenticated || !isAdmin){
        return <Redirect to="/"/>
    }
    return(
        <div className="Admin home page">
            <h2>Admin Home Page</h2>
        </div>
    )
}
 export default AdminHomePage;