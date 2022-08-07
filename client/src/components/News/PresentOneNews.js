import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PresentOneNewsDiv = styled.div`
  margin-bottom: 5px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  height: -webkit-calc(100vh - 422px);
  .emptySpace {
  }
`;

const PresentOneNews = ({ title, date, content, link }) => {
  return (
    <PresentOneNewsDiv className="PresentDoctor">
      <div>
        <h5> {title} </h5>
        <h5> {date} </h5>
        <h5> {content} </h5>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h5> לעוד מידע לחץ כאן </h5>
          </a>
        ) : null}
      </div>
    </PresentOneNewsDiv>
  );
};
export default PresentOneNews;
