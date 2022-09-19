import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PresentOneNewsDiv = styled.div`
  margin-bottom: 5px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: auto;

  .emptySpace {
  }
  .dateSpan {
    text-align: initial;
    padding-left: 10px;
    padding-top: 8px;
  }
`;

const PresentOneNews = ({ title, date, content, link }) => {
  return (
    <PresentOneNewsDiv className="oneNewsDiv">
      <div>
        <div className={"dateSpan"}> {date} </div>
        <h5> {title} </h5>

        <h5 style={{ "word-wrap": "break-word" }}> {content} </h5>
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
