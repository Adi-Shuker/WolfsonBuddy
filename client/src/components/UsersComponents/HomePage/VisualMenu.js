import CarIcon from "../Icons/CarIcon";
import GameIcon from "../Icons/GamesIcon";
import TeamIcon from "../Icons/TeamIcon";
import NavIcon from "../Icons/NavIcon";
import NewsIcon from "../Icons/NewsIcon";
import styled from "styled-components";
import React from "react";
import { Grid } from "@mui/material";
const IconsCollection = styled.div``;
const Line = styled.div`
  display: flex;
  item-align: center;
  justify-content: center;
  .iconWrapper {
    border-radius: 10px;
    border-size: 1px;
    border-style: solid;
    border-color: #2e388d;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;
const VisualMenu = () => {
  const handleMenuItemClick = ({ iconClicked }) => {
    console.log({ iconClicked });
  };

  return (
    <div>
      <IconsCollection className="IconsCollection">
        <Line className="first line">
          <div className="iconWrapper">
            <CarIcon
              onClick={() => {
                handleMenuItemClick({ iconClicked: "CarClicked" });
              }}
            />
          </div>
          <div className="iconWrapper">
            <GameIcon
              onClick={() => {
                handleMenuItemClick({ iconClicked: "GameClicked" });
              }}
            />
          </div>
          <div className="iconWrapper">
            <TeamIcon />
          </div>
        </Line>

        <Line className="second line">
          <div className="iconWrapper">
            <NewsIcon />
          </div>
          <div className="iconWrapper">
            <NavIcon />
          </div>
        </Line>
      </IconsCollection>
    </div>
  );
};

export default VisualMenu;
