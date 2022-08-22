import React, { useState } from "react";
import { NewsContext } from "../../App";
import PresentOneNews from "./PresentOneNews.js";
import { useHistory } from "react-router-dom";
import Header from "../UsersComponents/Header";

const News = () => {
  const { news, setNews } = React.useContext(NewsContext);
  const history = useHistory();
  return (
     <div className="newsDiv">
       <Header />
       <h3>חדשות ועדכונים</h3>
       <div className="BackIconDiv iconWrapper lightGreyBorder">
         {news.map((item) => {
           return (
             <PresentOneNews
               key={item.id}
               title={item.title}
               date={item.post_date.split("T")[0]}
               content={item.content}
               link={item.link}
             />
           );
         })}
       </div>
       <Footer showBackIcon={true} />
     </div>
  );
};

export default News;
