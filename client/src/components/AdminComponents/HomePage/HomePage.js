import { Redirect } from "react-router-dom"
import 'react-bootstrap/dist/react-bootstrap.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React ,{useState} from "react";
import {IsAdminContext, IsAuthenticateContext, UserDetailsContext} from "../../../App";
import { Tabs, Tab} from 'react-bootstrap';
import EditGetToKnowTheTeam from '../EditGetToKnowTheTeam/EditGetToKnowTheTeam.js';
import AddNewsAndUpdates from '../AddNewsAndUpdates/AddNewsAndUpdates.js';
import SurveyResults from '../Survey/SurveyResults.js';
import AddTeamMember from '../EditGetToKnowTheTeam/AddTeamMember.js';
import EditSurvey from '../Survey/EditSurvey.js';
import './HomePage.css';

const AdminHomePage = () => {
    const {isAuthenticated, setIsAuthenticated} = React.useContext(IsAuthenticateContext);
    const { userDetails, setUserDetails } = React.useContext(UserDetailsContext);
    const {isAdmin, setIsAdmin} = React.useContext(IsAdminContext);
    if (!isAuthenticated || !isAdmin){
        return <Redirect to="/"/>
    }
    const tabList = [
        {title:"הוספת/מחיקת עדכונים", componentName:"AddNewsAndUpdates"},
        {title:"הוספת איש צוות", componentName:"AddTeamMember"},
        {title:"מחיקת/עריכת איש צוות", componentName:"EditGetToKnowTheTeam"},
        {title:"עריכת סקר שביעות רצון", componentName:"EditSurvey"},
        {title:"תוצאות הסקרים", componentName:"SurveyResults"},
    ]
    const tabSelected =(e)=>{
             console.log(e)
                console.log(userDetails)
        }

    return(
        <div className="Admin-home-page">
            <div className="text-right padding-right">
                <h2>שלום {userDetails.username}</h2>
            </div>
            <Tabs defaultActiveKey="AddNewsAndUpdates"  className="mb-3 tabs" onSelect={tabSelected} dir="rtl">
                <Tab tabClassName="tab" eventKey="AddNewsAndUpdates" title="הוספת/מחיקת עדכונים" color='#00138E;'>
                        <AddNewsAndUpdates/>
                </Tab>
                <Tab tabClassName="tab" eventKey="AddTeamMember" title="הוספת איש צוות" >
                    <AddTeamMember/>
                </Tab>
                <Tab tabClassName="tab" eventKey="EditGetToKnowTheTeam" title="מחיקת/עריכת איש צוות" >
                    <EditGetToKnowTheTeam/>
                </Tab>
                <Tab tabClassName="tab" eventKey="EditSurvey" title="עריכת סקר שביעות רצון" >
                    <EditSurvey/>
                </Tab>
                <Tab tabClassName="tab" eventKey="SurveyResults" title="תוצאות הסקרים" >
                    <SurveyResults/>
                </Tab>
            </Tabs>
        </div>
    )
}
 export default AdminHomePage;