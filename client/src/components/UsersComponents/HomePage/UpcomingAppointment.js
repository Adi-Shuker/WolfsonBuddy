import styled, { css } from "styled-components";
import CalendarIcon from "../Icons/CaIendarcon";
import { Button } from "react-bootstrap";

const UpcomingAppointmentDiv = styled.div`
  .span {
    text-align: right;
  }
`;

const Appointment = styled.div`
  border-radius: 10px;
  border-size: 2px;
  border-style: solid;
  border-color: #2e388d;

  .btn {
    background-color: white;
    color: #2e388d;
    border-color: #2e388d;
  }
`;

const WrapperCalendarIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonsLine = styled.div`
  .btn {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const UpcomingAppointment = () => {
  const doctorName = 'ד"ר שגית שושן';
  const departmentName = "אף אוזן גרון";
  return (
    <UpcomingAppointmentDiv className="UpcomingAppointmentDiv">
      <Appointment>
        <h1>{doctorName}</h1>
        <h2>{departmentName}</h2>
        <WrapperCalendarIcon>
          <CalendarIcon />
        </WrapperCalendarIcon>
        <ButtonsLine>
          <Button className="btn" onClick={console.log("nav to office")}>
            נווט לחדר הטיפול
          </Button>
          <Button
            className="btn"
            onClick={console.log("get to know the doctor", doctorName)}
          >
            הכר את הרופא
          </Button>
        </ButtonsLine>
      </Appointment>
    </UpcomingAppointmentDiv>
  );
};

export default UpcomingAppointment;
