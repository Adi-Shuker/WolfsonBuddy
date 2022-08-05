//this componnet will be in use both in the user side - when a user want to get to know doctor
// and in the admin side - in the preview
import styled from "styled-components";
import React, { useState } from "react";
import UserIcon from "./UsersComponents/Icons/UserIcon";

const PresentDoctorDiv = styled.div`
  max-width: 50px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  height: -webkit-calc(100vh - 422px);
  .emptySpace {
  }
`;

const PresentDoctor = ({ doctor }) => {
  const [src, setSrc] = useState(
    "http://localhost:3001/images/teamMembersImages/default_profile.png"
  );
  if (doctor && doctor.image) {
    fetch(`/images/teamMembersImages/${doctor.image}`, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          //case Image exists.
          setSrc(
            `http://localhost:3001/images/teamMembersImages/${doctor.image}`
          );
        } else {
          setSrc(
            "http://localhost:3001/images/teamMembersImages/default_profile.png"
          );
        }
      })
      .catch((err) => console.log("Error:", err));
  }

  return (
    <PresentDoctorDiv className="PresentDoctor">
      {doctor ? (
        <div>
          <img src={src} alt="img" width={150} height={150} />
          <h5> {doctor.name} </h5>
          <h5> {doctor.department} </h5>
          <h5> {doctor.role} </h5>
          <h5> {doctor.description} </h5>
          <h5> {doctor.phone_number} </h5>
          <h5> {doctor.clinical_practice} </h5>
          <h5> {doctor.scientific_practice} </h5>
          <h5> {doctor.academic_experience} </h5>
          <h5> {doctor.professional_unions} </h5>
          <h5> {doctor.education} </h5>
        </div>
      ) : (
        <img src={src} alt="img" width={150} height={150} />
        /*
        <div className={"emptySpace"} />
*/
      )}
    </PresentDoctorDiv>
  );
};

export default PresentDoctor;
