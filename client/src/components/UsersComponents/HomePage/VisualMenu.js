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
import { useHistory } from "react-router-dom";
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
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;
const VisualMenu = () => {
  const history = useHistory();
  const handleMenuItemClick = ({ iconClicked }) => {
    if (iconClicked == "CarClicked") {
      setButtonNavigationPopup(true);
    } else {
      history.push(iconClicked);
    }
  };
  const [buttonNavigationPopup, setButtonNavigationPopup] = useState(false);
  return (
    <div>
      <IconsCollection className="IconsCollection">
        <Line className="first line">
          <div className="iconWithText">
            <div
              className="iconWrapper lightGreyBorder"
              onClick={() => {
                handleMenuItemClick({ iconClicked: "CarClicked" });
              }}
            >
              <CarIcon />
            </div>
            <span className="iconTitle">דרכי הגעה</span>
          </div>
          <div className="iconWithText">
            <div
              className="iconWrapper lightGreyBorder"
              onClick={() => {
                handleMenuItemClick({ iconClicked: "/game" });
              }}
            >
              <GameIcon />
            </div>
            <span className="iconTitle">פעילוית לזמן ההמתנה</span>
          </div>
          <div className="iconWithText">
            <div
              className="iconWrapper lightGreyBorder"
              onClick={() => {
                handleMenuItemClick({ iconClicked: "/getToKnowTheTeam" });
              }}
            >
              <TeamIcon />
            </div>
            <span className="iconTitle">הכר את הצוות</span>
          </div>
        </Line>

        <Line className="second line">
          <div className="iconWithText">
            <div
              className="iconWrapper lightGreyBorder"
              onClick={() => {
                handleMenuItemClick({ iconClicked: "/news" });
              }}
            >
              <NewsIcon />
            </div>
            <span className="iconTitle">חדשות ועדכונים</span>
          </div>
          <div className="iconWithText">
            <div
              className="iconWrapper lightGreyBorder"
              onClick={() => {
                handleMenuItemClick({ iconClicked: "/navInHospital" });
              }}
            >
              <NavIcon />
            </div>
            <span className="iconTitle">ניווט בבית החולים</span>
          </div>
        </Line>
      </IconsCollection>
      <Modal
        className="navModal"
        show={buttonNavigationPopup}
        onHide={() => setButtonNavigationPopup(false)}
        centered
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <NavigationDiv setTrigger={setButtonNavigationPopup} />
      </Modal>
    </div>
  );
};

export default VisualMenu;
