import './index.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./components/LoginPage/LoginPage";
import AdminHomePage from "./components/AdminComponents/HomePage/HomePage";
import UsersHomePage from "./components/UsersComponents/HomePage/HomePage";
import {BrowserRouter,Route, Switch} from "react-router-dom";

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
                            <Route exact path="/login" component={LoginPage}/>
                            <Route exact path="/usersHomePage" component={UsersHomePage}/>
                            <Route exact path="/adminHomePage" component={AdminHomePage}/>
                        </Switch>
                    </BrowserRouter>
                </div>
        </IsAdminContext.Provider>
        </IsAuthenticateContext.Provider>
    )
}
export default App;
