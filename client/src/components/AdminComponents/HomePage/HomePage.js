import { Redirect } from "react-router-dom"
import React ,{useState} from "react";
import {IsAdminContext, IsAuthenticateContext} from "../../../App";
import { Tabs, Tab} from 'react-bootstrap';
import EditGetToKnowTheTeam from '../EditGetToKnowTheTeam/EditGetToKnowTheTeam.js';
import AddNewsAndUpdates from '../AddNewsAndUpdates/AddNewsAndUpdates.js';
import SurveyResults from '../SurveyResults/SurveyResults.js';
import TabContent from 'react-bootstrap/TabContent'
const AdminHomePage = () => {
    const {isAuthenticated, setIsAuthenticated} = React.useContext(IsAuthenticateContext);
    const {isAdmin, setIsAdmin} = React.useContext(IsAdminContext);
    if (!isAuthenticated || !isAdmin){
        return <Redirect to="/"/>
    }
    let departmentsList = ["dep1","dep2","dep3"]
    let doctorsList = [{name: "doc1", department: "dep1"}, {name: "doc2", department: "dep1"}, {name: "doc3", department: "dep2"},]
    let tabList = [
        {title:"הוספת חדשות ועדכונים", componentName:"AddNewsAndUpdates"},
        {title:"תוצאות סקרים", componentName:"SurveyResults"},
    ]
    var component = null;
    const [componentName, setComponentName] = useState (null)
    const tabSelected =(e)=>{
         console.log(e)
         setComponentName(e)
    }
    const createComponent = () => {
        if (componentName==="AddNewsAndUpdates")
              return <AddNewsAndUpdates/>
              else {
              return <SurveyResults/>
              }
        }
    return(
        <div className="Admin home page">
            <h2>Admin Home Page</h2>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" onSelect={tabSelected}>
                 {
                 tabList.map(function(anObjectMapped, index) {
                    return (
                    <Tab
                         key = {index} eventKey={anObjectMapped.componentName} title={anObjectMapped.title}
                          >
                          {createComponent()}
                         </Tab>
                    )
                    })}
            </Tabs>
        </div>
    )
}
 export default AdminHomePage;