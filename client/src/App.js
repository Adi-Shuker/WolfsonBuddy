import './index.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./components/LoginPage/LoginPage";
import AdminHomePage from "./components/AdminComponents/HomePage/HomePage";
import UsersHomePage from "./components/UsersComponents/HomePage/HomePage";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import CreateNewAccount from "./components/LoginPage/CreateNewAccount";
import ForgotPassword from "./components/LoginPage/ForgotPassword";

export const IsAuthenticateContext = React.createContext();
export const IsAdminContext = React.createContext();

function App() {
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    return(
        <IsAuthenticateContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
        <IsAdminContext.Provider value={{isAdmin, setIsAdmin}}>
                <div className="app">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={LoginPage}/>
                            <Route exact path="/usersHomePage" component={UsersHomePage}/>
                            <Route exact path="/adminHomePage" component={AdminHomePage}/>
                            <Route exact path="/createNewAccount" component={CreateNewAccount}/>
                            <Route exact path="/forgotPassword" component={ForgotPassword}/>
                        </Switch>
                    </BrowserRouter>
                </div>
        </IsAdminContext.Provider>
        </IsAuthenticateContext.Provider>
    )
}
export default App;
