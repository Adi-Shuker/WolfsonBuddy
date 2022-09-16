import {Redirect, useHistory} from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  IsAdminContext,
  IsAuthenticateContext,
  UserDetailsContext,
} from "../../../App";
import { Tabs, Tab } from "react-bootstrap";
import DeleteAndEditTeamMember from "../EditGetToKnowTheTeam/DeleteAndEditTeamMember";
import AddNewsAndUpdates from "../NewsAndUpdates/AddNewsAndUpdates.js";
import SurveyResults from "../Survey/SurveyResults.js";
import AddTeamMember from "../EditGetToKnowTheTeam/AddTeamMember.js";
import EditSurvey from "../Survey/EditSurvey.js";
import AddingAdminForm from "../AddingAdminForm.js";
import "./HomePage.css";
import Header from "../../UsersComponents/Header";
import Footer from "../../UsersComponents/Footer";

const AdminHomePage = () => {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(IsAuthenticateContext);
  const { userDetails, setUserDetails } = React.useContext(UserDetailsContext);
  const {isAdmin, setIsAdmin} = React.useContext(IsAdminContext);
  const history = useHistory();
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }else{
    const token = localStorage.getItem("accessToken");
      if ( Object.keys(userDetails).length === 0) {
        fetch("/api/user-data-from-token", {
          method: "GET",
          headers: { "Content-Type": "application/json", "x-access-token": token },
        })
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              if(res.role !=='admin'){
                setIsAdmin(false);
                history.push("/");
              }else{
                setIsAdmin(true);
              }
              setUserDetails(res)
            })
            .catch((err) => {
              console.log(err);
            });
      } else {
      }
  }

  return (
    <div className="Admin-home-page">
      <Header />
      <Tabs
        defaultActiveKey="AddNewsAndUpdates"
        className="mb-3 tabs"
        dir="rtl"
      >
        <Tab
          tabClassName="tab"
          eventKey="AddNewsAndUpdates"
          title="הוספת/מחיקת עדכונים"
          color="#00138E;"
        >
          <div className={"tab-wrapper"}>
            <AddNewsAndUpdates className={"tabContent"} />
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="AddTeamMember" title="הוספת איש צוות">
          <div className={"tab-wrapper"}>
            <AddTeamMember />
          </div>
        </Tab>
        <Tab
          tabClassName="tab"
          eventKey="DeleteAndEditTeamMember"
          title="מחיקת/עריכת איש צוות"
        >
          <div className={"tab-wrapper"}>
            <DeleteAndEditTeamMember />
          </div>
        </Tab>
        <Tab
          tabClassName="tab"
          eventKey="EditSurvey"
          title="עריכת סקר שביעות רצון"
        >
          <div className={"tab-wrapper"}>
            <EditSurvey />
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="SurveyResults" title="תוצאות הסקרים">
          <div className={"tab-wrapper"}>
            <SurveyResults />
          </div>
        </Tab>
        <Tab
          tabClassName="tab"
          eventKey="AddingAdminForm"
          title="הוספת משתמש אדמין"
        >
          <div className={"tab-wrapper"}>
            <AddingAdminForm />
          </div>
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
};
export default AdminHomePage;
