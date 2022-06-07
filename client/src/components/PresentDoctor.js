//this componnet will be in use both in the user side - when a user want to get to know doctor
// and in the admin side - in the preview
import styled from "styled-components";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

//maybe instead of doing import it will be better
//to ask the DB for picture and pragraph
import myImage from "../images/doctorsImages/doc1.png";

const PresentDoctorDiv = styled.div`
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  height: -webkit-calc(100vh - 422px);
  .emptySpace {
  }
`;

const PresentDoctor = ({ doctor }) => {
  const name = "דוקטור שגית שושן";
  const t1 = "רופאה מומחית";
  const t2 = "אחראית מרפאות ריח";
  return (
    <PresentDoctorDiv className="PresentDoctor">
      {doctor ? (
        <div>
          <h2> hey, I am {doctor} </h2>
          <img src={myImage} />
        </div>
      ) : (
        <div className={"emptySpace"} />
      )}
    </PresentDoctorDiv>
  );
};
export default PresentDoctor;
