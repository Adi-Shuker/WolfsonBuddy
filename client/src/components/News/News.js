import React, { useState } from "react";
import {IsAuthenticateContext, NewsContext, UserDetailsContext} from "../../App";
import PresentOneNews from "./PresentOneNews.js";
import {Redirect, useHistory} from "react-router-dom";
import Header from "../UsersComponents/Header";
import Footer from "../UsersComponents/Footer";

const News = () => {
  const { news, setNews } = React.useContext(NewsContext);
  const {isAuthenticated, setIsAuthenticated} = React.useContext(IsAuthenticateContext);
  const {userDetails, setUserDetails} = React.useContext(UserDetailsContext);
    if (!isAuthenticated) {
        return <Redirect to="/" />;
    }else{
        const token = localStorage.getItem("accessToken");
        fetch("/api/user-data-from-token", {
            method: "GET",
            headers: { "Content-Type": "application/json", "x-access-token": token },
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setUserDetails(res)
            })
            .catch((err) => {
                console.log(err);
            });
    }
  return (
    <div className="newsDiv">
      <Header />
      <h3>חדשות ועדכונים</h3>
      <div className="BackIconDiv iconWrapper lightGreyBorder">
        {news.length>0?news.map((item) => {
          return (
            <PresentOneNews
              key={item.id}
              title={item.title}
              date={item.post_date.split("T")[0]}
              content={item.content}
              link={item.link}
            />
          );
        }):""}
      </div>
      <Footer showBackIcon={true} />
    </div>
  );
};

export default News;
