import styled from "styled-components";
import React, { useState } from "react";
import myImage from "../images/doctorsImages/doc1.png";

const PresentOneNewsDiv = styled.div`
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  height: -webkit-calc(100vh - 422px);
  .emptySpace {
  }
`;

const PresentOneNews = ({ doctor }) => {
  const name = "דוקטור שגית שושן";
  const t1 = "רופאה מומחית";
  const t2 = "אחראית מרפאות ריח";
  return (
    <PresentOneNewsDiv className="PresentDoctor">
      {doctor ? (
        <div>
          <h2> hey, I am {doctor} </h2>
          <img src={myImage} />
        </div>
      ) : (
        <div className={"emptySpace"} />
      )}
    </PresentOneNewsDiv>
  );
};
export default PresentDoctor;
