import MenuIcon from "./Icons/MenuIcon.js";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./HeaderStyle.css";
import NavigationDiv from "./HomePage/NavigationDiv";
import { IsAdminContext, UserDetailsContext } from "../../App";
import LogoutIcon from "./Icons/LogoutIcon";

const HeaderDiv = styled.div`
  display: grid;
  .modal.custom .modal-dialog {
    width: 50%;
    position: absolute;
    .modal-content {
      margin-left: 500px;
    }
  }
  &.isAdmin-false {
    .title {
      padding: 10px;
      background-color: #feb914;
      color: #00138e;
    }
  }
  &.isAdmin-true {
    .title {
      padding: 10px;
      background-color: #00138e;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    path {
      stroke: white;
      fill: white;
    }
  }
  .iconAndText {
    display: flex;
    align-items: baseline;
    cursor: pointer;
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
    direction: rtl;
  }
`;

const Header = () => {
  const [buttonNavigationPopup, setButtonNavigationPopup] = useState(false);
  const [showSideMenu, setShowSideMenu] = React.useState(false);
  const { isAdmin, setIsAdmin } = React.useContext(IsAdminContext);
  const { userDetails, setUserDetails } = React.useContext(UserDetailsContext);
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
  const handleLogout = () => {
    console.log("need to logout");
  };
  return (
    <HeaderDiv className={"Header isAdmin-" + isAdmin}>
      <div className={"title"}>
        <div>המרכז הרפואי על שם אדית וולפסון</div>

        {isAdmin ? (
          <div className={"iconAndText"} onClick={handleLogout}>
            <LogoutIcon withoutTopMargin={true} />
            <span>התנתקות</span>
          </div>
        ) : null}
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
            <div className="helloAdmin">שלום {userDetails.username} </div>
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
