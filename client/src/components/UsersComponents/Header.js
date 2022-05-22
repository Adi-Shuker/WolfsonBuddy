import MenuIcon from "./Icons/MenuIcon.js";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import React, { useCallback, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./HeaderStyle.css";

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

const Modal2 = styled.div``;

const Header = () => {
  const [showSideMenu, setShowSideMenu] = React.useState(false);
  const isAdmin = true;
  const adminName = "מיכל";
  const onClickMenu = () => {
    setShowSideMenu(!showSideMenu);
    console.log("onClickMenu", showSideMenu);
  };
  const history = useHistory();
  const onMenuItemSelection = (path) => {
    console.log(path);
    if (path != "/car") {
      history.push(path);
    } else {
    }
  };

  return (
    <HeaderDiv className="Header">
      <div className={"title isAdmin-" + isAdmin}>
        <div>המרכז הרפואי על שם אידת וולפסון</div>
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
    </HeaderDiv>
  );
};

export default Header;
