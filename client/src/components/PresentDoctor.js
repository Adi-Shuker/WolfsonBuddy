//this componnet will be in use both in the user side - when a user want to get to know doctor
// and in the admin side - in the preview
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import UserIcon from "./UsersComponents/Icons/UserIcon";
import { StaffMembersContext } from "../App";
import NavigationDiv from "./UsersComponents/HomePage/NavigationDiv";
import PresentDoctorModal from "./PresentDoctorModal";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

const PresentDoctorDiv = styled.div`
  margin-bottom: 10px;
  overflow-y: auto;
  margin-top: 5px;
  img {
    border-radius: 5px;
  }
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
`;

const PresentDoctor = ({ doctor, inModal }) => {
  const [showPresentDoctorModal, setShowPresentDoctorModal] = useState(false)
  const [doctorData, setDoctorData] = useState({})
  const [src, setSrc] = useState(
    "images/teamMembersImages/default_profile.png"
  );
  const { staffMembers, setStaffMembers } =
    React.useContext(StaffMembersContext);
useEffect(()=>{
  const selectedDoctor = staffMembers.filter(
      (staffMember) => staffMember.member_name === doctor
  )[0];
  setDoctorData(selectedDoctor)
  if (selectedDoctor && selectedDoctor.picture) {
    fetch(`/images/teamMembersImages/${selectedDoctor.picture}`, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            //case Image exists.
            setSrc(
                `images/teamMembersImages/${selectedDoctor.picture}`
            );
          } else {
            setSrc(
                "images/teamMembersImages/default_profile.png"
            );
          }
        })
        .catch((err) => console.log("Error:", err));
  }
},[doctor])


  return (
      <>
    <PresentDoctorDiv className={"PresentDoctor inModal-" + inModal}>
      {doctorData ? (
        <div className={"presenting"}  style={{"width": "317px", "height": "330px"}}>
          <img src={src} alt="img" width={150} height={150} onClick={()=>{setShowPresentDoctorModal(true)}}/>
          <h5> {doctorData.member_name} </h5>
          <h5> {doctorData.department_name} </h5>
          <h5 dir="rtl"> {doctorData.role} </h5>

          <Modal
              className="navModal"
              show={showPresentDoctorModal}
              onHide={() => setShowPresentDoctorModal(false)}
              centered
          >
            <Modal.Header className="border-0" closeButton></Modal.Header>
            <Modal.Body>
              <Container>
              <PresentDoctorModal setTrigger={setShowPresentDoctorModal} doctorData={doctorData} imageUrl={src}/>
              </Container>
            </Modal.Body>
          </Modal>

        </div>
      ) : (
        <div className={"presenting"} style={{"width": "317px", "height": "330px"}}>יש לבחור איש צוות</div>
      )}
    </PresentDoctorDiv>
      </>
  );
};

export default PresentDoctor;
