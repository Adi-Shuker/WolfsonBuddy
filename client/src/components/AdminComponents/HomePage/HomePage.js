import { Redirect } from "react-router-dom";
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
import "./HomePage.css";
import Header from "../../UsersComponents/Header";
import Footer from "../../UsersComponents/Footer";

const AdminHomePage = () => {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(
    IsAuthenticateContext
  );
  const { isAdmin, setIsAdmin } = React.useContext(IsAdminContext);
  if (!isAuthenticated || !isAdmin) {
    return <Redirect to="/" />;
  }

  const tabList = [
    { title: "הוספת/מחיקת עדכונים", componentName: "AddNewsAndUpdates" },
    { title: "הוספת איש צוות", componentName: "AddTeamMember" },
    { title: "מחיקת/עריכת איש צוות", componentName: "DeleteAndEditTeamMember" },
    { title: "עריכת סקר שביעות רצון", componentName: "EditSurvey" },
    { title: "תוצאות הסקרים", componentName: "SurveyResults" },
  ];
  const tabSelected = (e) => {
    console.log(e);
  };

  return (
    <div className="Admin-home-page">
      <Header />
      <Tabs
        defaultActiveKey="AddNewsAndUpdates"
        className="mb-3 tabs"
        onSelect={tabSelected}
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
      </Tabs>
      <Footer />
    </div>
  );
};
export default AdminHomePage;
