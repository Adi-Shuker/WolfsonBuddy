import styled, { css } from "styled-components";
import CalendarIcon from "../Icons/CaIendarcon";
import AddGoogleCalenderEvent from "./AddGoogleCalenderEvent";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import React, {useEffect, useState} from "react";
import NavigationDiv from "./NavigationDiv";
import PresentDoctor from "../../PresentDoctor";
import PresentDoctorModal from "../../PresentDoctorModal";
import {StaffMembersContext} from "../../../App";

const UpcomingAppointmentDiv = styled.div`
  overflow-y: auto;
  margin-left: 20px;
  margin-right: 20px;
  .textInfo-appointment {
    display: grid;
    text-align: right;
    padding-top: 10px;
  }
  .InfoAndCalenderDiv {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .doctorName-appointment {
    font-weight: bold;
  }
  .btn {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
    color: #2e388d;
  }
  .btn-primary:focus {
    color: #2e388d;
    border: 1px solid #2e388d;
  }
`;

const WrapperCalendarIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const UpcomingAppointment = ({ doctorName, departmentName, time, date }) => {
  const [showDoctor, setShowDoctor] = useState(false);
  const [doctorData, setDoctorData] = useState({})
  const [src, setSrc] = useState(
      "images/teamMembersImages/default_profile.png"
  )
  const handleClick = () => {
    setShowDoctor(true);
  };
  const { staffMembers, setStaffMembers } = React.useContext(StaffMembersContext);
  useEffect(()=>{
    const selectedDoctor = staffMembers.filter(
        (staffMember) => staffMember.member_name === doctorName
    )[0];
    setDoctorData(selectedDoctor)
    if (selectedDoctor && selectedDoctor.picture) {
      fetch(`/images/teamMembersImages/${selectedDoctor.picture}`, { method: "HEAD" })
          .then((res) => {
            console.log(res)
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
  },[doctorName])

  return (
    <UpcomingAppointmentDiv
      className={"UpcomingAppointmentDiv lightGreyBorder"}
    >
      <div className="InfoAndCalenderDiv">
        <WrapperCalendarIcon>
          <AddGoogleCalenderEvent title={doctorName+" "+departmentName} date={date} time={time}/>
        </WrapperCalendarIcon>

        <div className="textInfo-appointment">
          <span className="doctorName-appointment">{doctorName}</span>
          <span className="departmentName-appointment">{departmentName}</span>
          <span className="timeAndDate-appointment">
            {time + "  "}|{"  " + date}
          </span>
        </div>
      </div>

      <Button className="btn lightGreyBorder">נווט לחדר הטיפול</Button>
      <Button className="btn lightGreyBorder" onClick={handleClick}>
        הכר את הרופא
      </Button>
      <Modal
        className="navModal"
        show={showDoctor}
        onHide={() => setShowDoctor(false)}
        centered
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <PresentDoctorModal setTrigger={setShowDoctor} doctorData={doctorData} imageUrl={src}/>
        {/*<PresentDoctor*/}
        {/*  setTrigger={setShowDoctor}*/}
        {/*  doctor={doctorName}*/}
        {/*  inModal={true}*/}
        {/*/>*/}
        </Modal.Body>
      </Modal>
    </UpcomingAppointmentDiv>
  );
};

export default UpcomingAppointment;
