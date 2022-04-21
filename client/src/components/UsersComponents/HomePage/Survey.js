import React from "react";
import styled from "styled-components";
import SurveyIcon from "../Icons/SurveyIcon";
const SurveyDiv = styled.div`
  padding: 5px;
  border-radius: 10px;
  border-size: 1px;
  border-style: solid;
  border-color: #2e388d;
`;
const Survey = (props) => {
  const text = "חשוב לנו לשמוע את דעתך! למילוי סקר שביעות רצון לחצו כאן";
  return (
    <SurveyDiv className="SurveyDiv">
      {text}
      <div className="IconWrapper">
        <SurveyIcon />
      </div>
    </SurveyDiv>
  );
};

export default Survey;
