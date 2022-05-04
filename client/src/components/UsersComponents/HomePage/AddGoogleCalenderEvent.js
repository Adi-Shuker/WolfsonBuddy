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
    //todo read the data from the db
    const title = 'ד"ר+שגית+שושן+-+אף+אוזן+גרון';
    const startDatetime = moment('20220506T132520Z');
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