import "./index.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminHomePage from "./components/AdminComponents/HomePage/HomePage";
import UsersHomePage from "./components/UsersComponents/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateNewAccount from "./components/LoginPage/CreateNewAccount";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import "./App.css";

import DoctorsByDepartment from "./components/DoctorsByDepartment";
import NewsManager from "./components/NewsManager/NewsManager";
import GetToKnowTheTeam from "./components/GetToKnowTheTeam/GetToKnowTheTeam";
import EditGetToKnowTheTeam from "./components/AdminComponents/EditGetToKnowTheTeam/EditGetToKnowTheTeam.js";
import Header from "./components/UsersComponents/Header.js";
import Game from "./components/Game/Game";
import News from "./components/News/News";
import SurveyForm from "./components/UsersComponents/SurveyForm/SurveyForm";
import { useHistory } from "react-router-dom";
export const IsAuthenticateContext = React.createContext({});
export const IsAdminContext = React.createContext({});
export const UserDetailsContext = React.createContext({});

function App() {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch("/api/verify-token", {
      method: "GET",
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsAuthenticated(res.isAuthenticated);
        setData(true);
      })
      .catch((err) => {
        setIsAuthenticated(false);
        setData(true);
      });
  }, []);

  return (
    <IsAuthenticateContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      <IsAdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
          <div className="app">
            <Header isAdmin={isAdmin} />
            <BrowserRouter>
              {data ? (
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
                    path="/GetToKnowTheTeam"
                    component={GetToKnowTheTeam}
                  />
                  <Route exact path="/Game" component={Game} />
                  <Route exact path="/News" component={News} />
                  <Route exact path="/" component={LoginPage} />
                </Switch>
              ) : null}
            </BrowserRouter>
          </div>
        </UserDetailsContext.Provider>
      </IsAdminContext.Provider>
    </IsAuthenticateContext.Provider>
  );
}


export default App;
