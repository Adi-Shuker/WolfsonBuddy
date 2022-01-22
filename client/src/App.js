import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState, useEffect} from "react"

function App() {
    const [data, setData] = useState(null)// return value [T, (T)->void ]
    const [users, setUsers] = useState([])// return value [T, (T)->void ]
    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message))
        fetch("/getUsers")
            .then((res) => res.json())
            .then((users) => setUsers(users))
    }, []);


    return (
        <div className="App">
            <div>{data ? data : "empty"}</div>
            {users.map((user,index) =>
                <div key={index}>{JSON.stringify(user)  }</div>
            )}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>massage</p>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}


export default App;
