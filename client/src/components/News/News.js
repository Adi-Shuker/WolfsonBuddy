import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import BackIcon from "../UsersComponents/Icons/BackIcon";
import { useHistory } from "react-router-dom";
const News = ({ text }) => {
  text = "hellohellohellohello";
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { y: 0 },
    to: { y: 400 },
    config: { duration: 10000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });
  const history = useHistory();
  return (
    <div className="newsDiv">
      <div key={key}>
        <animated.div style={scrolling}>{text}</animated.div>
      </div>
      <div
        className="BackIconDiv iconWrapper lightGreyBorder"
        onClick={() => history.push("/usersHomePage")}
      >
        <BackIcon />
      </div>
    </div>
  );
};

export default News;
