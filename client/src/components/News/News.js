import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

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
  return (
    <div key={key}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default News;
