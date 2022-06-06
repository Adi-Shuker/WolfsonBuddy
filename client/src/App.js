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

import GetToKnowTheTeam from "./components/GetToKnowTheTeam/GetToKnowTheTeam";
import Game from "./components/Game/Game";
import News from "./components/News/News";
import UserSurvey from "./components/AdminComponents/Survey/UserSurvey";
export const IsAuthenticateContext = React.createContext({});
export const IsAdminContext = React.createContext({});
export const UserDetailsContext = React.createContext({});
export const DepartmentsContext = React.createContext({});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [departments, setDepartments] = useState({})
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
      fetch('/api/departments', {
          method: 'GET',
          headers:{"Content-Type": "application/json","x-access-token": token},
      }).then((res) => {
          if(!(res.status === 200 || res.status === 304)){
              alert('אירעה שגיאה');
              return;
          }
          return res.json();
      }).then((res) => {
          setDepartments(res);
      })
  }, []);

    return (
        <IsAuthenticateContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <IsAdminContext.Provider value={{isAdmin, setIsAdmin}}>
                <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
                    <DepartmentsContext.Provider value={{departments, setDepartments}}>
                <div className="app">
                    <BrowserRouter>
                        {data ? <Switch>
                                <Route exact path="/usersHomePage" component={UsersHomePage}/>
                                <Route exact path="/adminHomePage" component={AdminHomePage}/>
                                <Route exact path="/createNewAccount" component={CreateNewAccount}/>
                                <Route exact path="/forgotPassword" component={ForgotPassword}/>
                                <Route exact path="/GetToKnowTheTeam" component={GetToKnowTheTeam}/>
                                <Route exact path="/Game" component={Game} />
                                <Route exact path="/News" component={News} />
                                <Route exact path="/userSurvey" component={UserSurvey}/>
                                <Route exact path="/" component={LoginPage}/>
                            </Switch>
                            : null}
                    </BrowserRouter>
                </div>
                    </DepartmentsContext.Provider>
                </UserDetailsContext.Provider>
            </IsAdminContext.Provider>
        </IsAuthenticateContext.Provider>
    )

}


export default App;
