import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import News from "../News/News.js";
//need to get the list in that form
//let newsList = ["new1","new2","new3"]
const NewsManager = ({newsList}) => {
  return (
  <div className="allNews">
        <oneNews>
           {newsList.map(function(msg, index){
              return <News text={msg} />;
           })}
        </oneNews>
  </div>
  );
};

export default NewsManager;
