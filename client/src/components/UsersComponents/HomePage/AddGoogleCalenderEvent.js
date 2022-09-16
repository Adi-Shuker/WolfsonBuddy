import React from "react";
import './HomePage.css';
import moment from 'moment'
import CalendarIcon from "../Icons/CaIendarcon";
import styled from "styled-components";

const WrapperCalendarIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkBuilder = (title, startDatetime)=>{
    const base = 'https://calendar.google.com/calendar/u/0/r/eventedit?';
    const endDatetime = startDatetime.clone().add(1, 'hours').format('YYYYMMDDTHHmmssZ');
    const location = 'המרכז הרפואי ע"ש אדית וולפסון, הלוחמים 62, חולון, 5822012, ישראל';
    return  base + 'dates=' + startDatetime.format('YYYYMMDDTHHmmssZ') + '/' + endDatetime +  '&location=' + location + '&text=' + title+'\n';
}

const AddGoogleCalenderEvent = (props) => {
    const title = props.title.replace(" ","+")
    const day = props.date.split(".")[0]
    const month = props.date.split(".")[1]
    const year = "20"+props.date.split(".")[2]
    const time = props.time.split(":")[0]+props.time.split(":")[1]
    const startDatetime = moment(year+month+day+'T'+time);
    return (
        <div>
            <WrapperCalendarIcon>
                <a href={LinkBuilder(title, startDatetime)} target='_blank' >
                    <CalendarIcon />
                </a>
            </WrapperCalendarIcon>
        </div>
    );
}

export default AddGoogleCalenderEvent