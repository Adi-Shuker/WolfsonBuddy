import MenuIcon from "./Icons/MenuIcon.js";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import React, { useCallback } from "react";
import { Modal } from "react-bootstrap";
import { useSpring, animated as a } from "react-spring";

import "./HeaderStyle.css";
const HeaderDiv = styled.div`
  .modal.custom .modal-dialog {
    width: 50%;
    position: absolute;

    .modal-content {
      margin-left: 500px;
    }
  }
`;

const AdminTitle = styled.div`
  background-color: #00138E;
  color: #ffffff;
  text-align: center;
  width: 100%;
  padding: 10px;
`;

const Title = styled.div`
  background-color: #feb914;
  text-align: center;
  width: 100%;
  padding: 10px;
`;

const MenuLine = styled.div`
  display: flex;
  justify-content: space-between;
  .modalSideMenu {
    align-item: right;
    border: solid 10px red;
  }
  .modalWrapper {
    width: 0px;
  }
  float: right;
`;

const Modal2 = styled.div``;

const Header = ({ isAdmin }) => {
  const [showSideMenu, setShowSideMenu] = React.useState(false);

  const onClickMenu = () => {
    setShowSideMenu(!showSideMenu);
    console.log("onClickMenu", showSideMenu);
  };
  const styleModal = {
    content: {
      background: "#FFFF00",
      color: "#FFFF00",
    },
  };
  return (
      <div>
      {isAdmin ? (
          <HeaderDiv className="Header">
            <AdminTitle className="title">
              <img
                  className="wolfsonLogo"
                  src={require("../../images/wolfsonLogo.png")}
                  width="4%"
                  alt="wolfsonLogo"
              />
              <h3 className="header-title">המרכז הרפואי על שם אדית וולפסון</h3>
            </AdminTitle>
          <MenuLine className="MenuLineDiv">
            <img
                className="logo"
                src={require("../../images/wolfsonBuddyLogo.jpg")}
                width="25%"
                alt="wolfsonBuddyLogo"
            />
          </MenuLine>
          </HeaderDiv>
      ) : (
        <HeaderDiv className="Header">
          <Title className="title">
            <h3 className="header-title">המרכז הרפואי על שם אדית וולפסון</h3>
          </Title>
        <MenuLine className="MenuLineDiv">
          <img
            className="logo"
            src={require("../../images/wolfsonBuddyLogo.jpg")}
            width="40%"
            alt="wolfsonBuddyLogo"
          />
          <div>
            <MenuIcon onClick={onClickMenu} />
          </div>
        </MenuLine>
            <div className="wrapping">
              <Modal
                  className="something"
                  show={showSideMenu}
                  onHide={() => setShowSideMenu(false)}
              >
                <SideMenu />
              </Modal>
            </div>
            </HeaderDiv>
      )}
      </div>
  );
};

export default Header;
