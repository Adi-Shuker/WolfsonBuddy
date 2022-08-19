import styled, { css } from "styled-components";
import CalendarIcon from "../Icons/CaIendarcon";
import { Button } from "react-bootstrap";
import AddGoogleCalenderEvent from "./AddGoogleCalenderEvent";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import NavigationDiv from "./NavigationDiv";
import PresentDoctor from "../../PresentDoctor";

const UpcomingAppointmentDiv = styled.div`
  overflow-y: auto;
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
  const history = useHistory();

  const [showDoctor, setShowDoctor] = useState(false);

  const handleClick = () => {
    console.log("need to present the doctor");
    setShowDoctor(true);
  };

  return (
    <UpcomingAppointmentDiv
      className={"UpcomingAppointmentDiv lightGreyBorder"}
    >
      <div className="InfoAndCalenderDiv">
        <WrapperCalendarIcon>
          <AddGoogleCalenderEvent />
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
        <PresentDoctor
          setTrigger={setShowDoctor}
          doctor={doctorName}
          inModal={true}
        />
      </Modal>
    </UpcomingAppointmentDiv>
  );
};

export default UpcomingAppointment;
