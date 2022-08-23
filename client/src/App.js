import "./index.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminHomePage from "./components/AdminComponents/HomePage/HomePage";
import UsersHomePage from "./components/UsersComponents/HomePage/HomePage";
import AddNewsAndUpdates from "./components/AdminComponents/NewsAndUpdates/AddNewsAndUpdates";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateNewAccount from "./components/LoginPage/CreateNewAccount";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import "./App.css";

import GetToKnowTheTeam from "./components/GetToKnowTheTeam/GetToKnowTheTeam";

import Game from "./components/Game/Game";
import News from "./components/News/News";
import UserSurvey from "./components/AdminComponents/Survey/UserSurvey";

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


// import petstoreJson from './swggerUI.yaml';

// const swaggerUi = SwaggerUi({ spec: petstoreJson })
// const UI = swaggerUi.getComponent('App', 'root')

import DeleteAndEditTeamMember from "./components/AdminComponents/EditGetToKnowTheTeam/DeleteAndEditTeamMember";
export const IsAuthenticateContext = React.createContext({});
export const IsAdminContext = React.createContext({});
export const UserDetailsContext = React.createContext({});
export const DepartmentsContext = React.createContext({});
export const NewsContext = React.createContext({});
export const StaffMembersContext = React.createContext({});


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [departments, setDepartments] = useState([]);
  const [staffMembers, setStaffMembers] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch("/api/verify-token", {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsAuthenticated(res.isAuthenticated);
        setData(true);
      })
      .catch((err) => {
        setIsAuthenticated(false);
        setData(true);
      });
    fetch("/api/departments", {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => {
        if (!(res.status === 200 || res.status === 304)) {
          return;
        }
        return res.json();
      })
      .then((res) => {
        setDepartments(res);
      });
    fetch("/api/staffMembers", {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setStaffMembers(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("/api/news", {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => {
        if (!(res.status === 200 || res.status === 304)) {
          return;
        }
        return res.json();
      })
      .then((res) => {
        setNews(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <IsAuthenticateContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      <IsAdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
          <DepartmentsContext.Provider value={{ departments, setDepartments }}>
            <StaffMembersContext.Provider
              value={{ staffMembers, setStaffMembers }}
            >
              <NewsContext.Provider value={{ news, setNews }}>
                <div className="app">
                  <BrowserRouter>
                    {data ? (
                      <div>
                        <Switch>
                          <Route
                            exact
                            path="/usersHomePage"
                            component={UsersHomePage}
                          />
                          <Route
                            exact
                            path="/adminHomePage"
                            component={AdminHomePage}
                          />
                          <Route
                            exact
                            path="/createNewAccount"
                            component={CreateNewAccount}
                          />
                          <Route
                            exact
                            path="/forgotPassword"
                            component={ForgotPassword}
                          />
                          <Route
                            exact
                            path="/getToKnowTheTeam"
                            component={GetToKnowTheTeam}
                          />
                          <Route
                            exact
                            path="/addNewsAndUpdates"
                            component={AddNewsAndUpdates}
                          />
                          <Route exact path="/Game" component={Game} />
                          <Route exact path="/News" component={News} />
                          <Route
                            exact
                            path="/userSurvey/:department_id"
                            component={UserSurvey}
                          />
                          <Route exact path="/" component={LoginPage} />`{" "}
                          <Route
                            exact
                            path="/deleteAndEditTeamMember"
                            component={DeleteAndEditTeamMember}
                          />
                          <Route
                            exact
                            path="/facebook"
                            component={() => {
                              window.location.herf =
                                "https://www.facebook.com/WolfsonMedicalCenter";
                              return null;
                            }}
                          />
                        </Switch>
                        {/*
                            <Footer />
*/}
                      </div>
                    ) : null}
                  </BrowserRouter>
                </div>
              </NewsContext.Provider>
            </StaffMembersContext.Provider>
          </DepartmentsContext.Provider>
        </UserDetailsContext.Provider>
      </IsAdminContext.Provider>
    </IsAuthenticateContext.Provider>
  );
}

export default App;
