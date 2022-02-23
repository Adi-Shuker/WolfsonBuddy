import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import News from "../News/News.js";
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