import MenuIcon from "./Icons/MenuIcon.js";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import React, { useCallback } from "react";
import { Modal } from "react-bootstrap";
import { useSpring, animated as a } from "react-spring";

import "./style.css";
const HeaderDiv = styled.div`
  .modal.custom .modal-dialog {
    width: 50%;
    position: absolute;

    .modal-content {
      margin-left: "500px";
    }
  }
`;

const Title = styled.div`
  background-color: #feb914;
  text-align: center;
  width: 100%;
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
    .modalSideMenu modal right fade {
      background-color: pink;
    }
  }
`;

const Modal2 = styled.div``;

const Header = () => {
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
    <HeaderDiv className="Header">
      <Title className="title">
        <div>המרכז הרפואי על שם אידת וולפסון</div>
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
          <SideMenu />
        </Modal>
      </div>
    </HeaderDiv>
  );
};

export default Header;
