import CarIcon from "../Icons/CarIcon";
import GameIcon from "../Icons/GamesIcon";
import TeamIcon from "../Icons/TeamIcon";
import NavIcon from "../Icons/NavIcon";
import NewsIcon from "../Icons/NewsIcon";
import styled from "styled-components";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import NavigationDiv from "./NavigationDiv";
import { Modal } from "react-bootstrap";
const IconsCollection = styled.div``;
const Line = styled.div`
  display: flex;
  item-align: center;
  justify-content: center;
  .iconWrapper {
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;
const VisualMenu = () => {
  const handleMenuItemClick = ({ iconClicked }) => {
    console.log({ iconClicked });
    if (iconClicked == "CarClicked") {
      setButtonNavigationPopup(true);
    }
  };
  const [buttonNavigationPopup, setButtonNavigationPopup] = useState(false);
  return (
    <div>
      <IconsCollection className="IconsCollection">
        <Line className="first line">
          <div
            className="iconWrapper blueBorder"
            onClick={() => {
              handleMenuItemClick({ iconClicked: "CarClicked" });
            }}
          >
            <CarIcon />
          </div>
          <div
            className="iconWrapper blueBorder"
            onClick={() => {
              handleMenuItemClick({ iconClicked: "GameClicked" });
            }}
          >
            <GameIcon />
          </div>
          <div
            className="iconWrapper blueBorder"
            onClick={() => {
              handleMenuItemClick({ iconClicked: "TeamClicked" });
            }}
          >
            <TeamIcon />
          </div>
        </Line>

        <Line className="second line">
          <div
            className="iconWrapper blueBorder"
            onClick={() => {
              handleMenuItemClick({ iconClicked: "NewsClicked" });
            }}
          >
            <NewsIcon />
          </div>
          <div
            className="iconWrapper blueBorder"
            onClick={() => {
              handleMenuItemClick({ iconClicked: "NavClicked" });
            }}
          >
            <NavIcon />
          </div>
        </Line>
      </IconsCollection>
      <Modal
        className="navModal"
        show={buttonNavigationPopup}
        onHide={() => setButtonNavigationPopup(false)}
      >
        <NavigationDiv />
      </Modal>
    </div>
  );
};

export default VisualMenu;
