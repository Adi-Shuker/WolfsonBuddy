import MenuIcon from "./Icons/MenuIcon.js";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import React, { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./HeaderStyle.css";
import NavigationDiv from "./HomePage/NavigationDiv";

const HeaderDiv = styled.div`
  display: grid;
  .modal.custom .modal-dialog {
    width: 50%;
    position: absolute;
    .modal-content {
      margin-left: 500px;
    }
  }
  .title {
    padding: 10px;
  }
  .isAdmin-false {
    background-color: #feb914;
    color: #00138e;
  }
  .isAdmin-true {
    background-color: #00138e;
    color: white;
  }
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
  .helloAdmin {
    padding-top: 4px;
    font-size: 30px;
    padding-right: 30px;
  }
`;

const Header = () => {
  const [buttonNavigationPopup, setButtonNavigationPopup] = useState(false);
  const [showSideMenu, setShowSideMenu] = React.useState(false);
  const isAdmin = false;
  const adminName = "מיכל";
  const onClickMenu = () => {
    setShowSideMenu(!showSideMenu);
  };
  const history = useHistory();
  const onMenuItemSelection = (path) => {
    if (path !== "/car" && path !== "/logout") {
      history.push(path);
    } else {
      if (path === "/car") {
        setButtonNavigationPopup(true);
      } else if (path === "/logout") {
      }
    }
  };

  return (
    <HeaderDiv className="Header">
      <div className={"title isAdmin-" + isAdmin}>
        <div>המרכז הרפואי על שם אדית וולפסון</div>
      </div>

      <MenuLine className="MenuLineDiv">
        <img
          className="logoInHeader"
          src={require("../../images/wolfsonBuddyLogo.jpg")}
          width="40%"
          alt="wolfsonBuddyLogo"
        />
        <div>
          {isAdmin ? (
            <div className="helloAdmin">!שלום {adminName} </div>
          ) : (
            <MenuIcon onClick={onClickMenu} />
          )}
        </div>
      </MenuLine>

      <div className="wrapping">
        <Modal
          className="something"
          show={showSideMenu}
          onHide={() => setShowSideMenu(false)}
        >
          <SideMenu
            setShowSideMenu={setShowSideMenu}
            onMenuItemSelection={(path) => onMenuItemSelection(path)}
          />
        </Modal>
      </div>
      <Modal
        className="navModal"
        show={buttonNavigationPopup}
        onHide={() => setButtonNavigationPopup(false)}
        centered
      >
        <Modal.Header className="border-0" closeButton />
        <NavigationDiv setTrigger={setButtonNavigationPopup} />
      </Modal>
    </HeaderDiv>
  );
};

export default Header;
