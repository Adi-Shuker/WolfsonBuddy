import React from "react";
import styled from "styled-components";
import SurveyIcon from "../Icons/SurveyIcon";
import {useHistory} from "react-router-dom";
const SurveyDiv = styled.div`
  padding: 5px;
  cursor: pointer;
`;
const Survey = (props) => {
    const history = useHistory();
  const handleMenuItemClick = ({ iconClicked }) => {
    console.log({ iconClicked });
  };
    const clickedSurvey = () => {
        history.push("/userSurvey/1");
    };

    const text = "חשוב לנו לשמוע את דעתך! למילוי סקר שביעות רצון לחצו כאן";
  return (
    <SurveyDiv className="SurveyDiv lightGreyBorder"
        onClick={() => {
        clickedSurvey({ iconClicked: "/survey" });
    }}>

        {text}
          <div className="IconWrapper">
            <SurveyIcon/>
          </div>
    </SurveyDiv>
  );
};

export default Survey;
