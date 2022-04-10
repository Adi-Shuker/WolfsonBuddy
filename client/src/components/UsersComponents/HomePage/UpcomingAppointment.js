
import styled, { css } from 'styled-components'
import CalendarIcon from "../Icons/CaIendarcon";
import { Button } from 'react-bootstrap';
const Appointment = styled.div`

    border-radius: 10px;
        border-size: 2px;
        border-style: solid;
        border-color:#2E388D;
     
    .btn {
    
        background-color:white;
        color:#2E388D;
        border-color:#2E388D;
    }
`;

const WrapperCalendarIcon = styled.div`

    display: flex;
    justify-content: center;
     
       
`;

const ButtonsLine = styled.div`
    //תעשי רווח מקסימלי כמו בשורה למעלה
       
`;

/*
const Button = styled.Button`
    background-color:white;
       
`;
*/


const UpcomingAppointment =() =>
{
    return (
        <div>
            תורים קרובים
            <Appointment>
                <h2>ד"ר שגית שושן</h2>
                <h1>אף אוזן גרון</h1>
            <WrapperCalendarIcon>
                <CalendarIcon/>
            </WrapperCalendarIcon>
                <ButtonsLine>
                    <Button className="btn">נווט לחדר הטיפול</Button>
                    <Button>הכר את הרופא</Button>
                </ButtonsLine>
            </Appointment>
        </div>

    )

}

export default UpcomingAppointment;
