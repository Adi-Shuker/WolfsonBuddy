//this componnet will be in use both in the user side - when a user want to get to know doctor
// and in the admin side - in the preview
import styled from "styled-components";
import React, { useState } from "react";
import UserIcon from "./UsersComponents/Icons/UserIcon";
import { StaffMembersContext } from "../App";

const PresentDoctorDiv = styled.div`
  margin-bottom: 10px;
  overflow-y: auto;
  margin-top: 5px;

  :not(&.inModal-true) {
    .presenting {
      border: 1px solid #2e388d;
      width: 450px;
    }
  }
  .presenting {
    border-radius: 5px;
    padding-top: 20px;

    height: 450px;
  }
  .emptySpace {
  }
`;

const PresentDoctor = ({ doctor, inModal }) => {
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
  console.log(doctor);
  const { staffMembers, setStaffMembers } =
    React.useContext(StaffMembersContext);

  const filtered = staffMembers.filter(
    (staffMember) => staffMember.member_name === doctor
  );
  console.log(staffMembers);
  console.log(filtered);
  const doctorData = staffMembers.filter(
    (staffMember) => staffMember.member_name === doctor
  )[0];
  console.log(doctorData);
  const role = doctorData ? doctorData.role : "heyyy";
  //console.log(role);
  return (
    <PresentDoctorDiv className={"PresentDoctor inModal-" + inModal}>
      {doctorData ? (
        <div className={"presenting"}>
          <img src={src} alt="img" width={150} height={150} />
          <h5> {doctorData.member_name} </h5>
          <h5> {doctorData.department_name} </h5>
          <h5> {doctorData.role} </h5>
          <h5> {doctorData.description} </h5>
          <h5> {doctorData.phone_number} </h5>
          <h5> {doctorData.clinical_practice} </h5>
          <h5> {doctorData.scientific_practice} </h5>
          <h5> {doctorData.academic_experience} </h5>
          <h5> {doctorData.professional_unions} </h5>
          <h5> {doctorData.education} </h5>
        </div>
      ) : (
        <div className={"presenting"}>יש לבחור איש צוות</div>
      )}
    </PresentDoctorDiv>
  );
};

export default PresentDoctor;
