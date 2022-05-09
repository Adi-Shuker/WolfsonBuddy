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
      <Title className="title">
        <div>המרכז הרפואי על שם אידת וולפסון</div>
      </Title>

      <MenuLine className="MenuLineDiv">
        <img
          className="logoInHeader"
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
