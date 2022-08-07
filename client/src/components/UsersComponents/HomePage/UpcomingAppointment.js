import styled, { css } from "styled-components";
import CalendarIcon from "../Icons/CaIendarcon";
import { Button } from "react-bootstrap";
import AddGoogleCalenderEvent from "./AddGoogleCalenderEvent";

const UpcomingAppointmentDiv = styled.div`
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
  .btn {
    background-color: white;
    color: #2e388d;
  }
  .span {
    color: pink;
  }
  .doctorName-appointment {
    font-weight: bold;
  }
  .btn {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
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

const UpcomingAppointment = () => {
  const doctorName = 'ד"ר שגית שושן';
  const departmentName = "אף אוזן גרון";
  const time = "18:30";
  const date = "14.12.2022";
  return (
    <UpcomingAppointmentDiv className="UpcomingAppointmentDiv lightGreyBorder">
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
      <Button className="btn lightGreyBorder">הכר את הרופא</Button>
    </UpcomingAppointmentDiv>
  );
};

export default UpcomingAppointment;
