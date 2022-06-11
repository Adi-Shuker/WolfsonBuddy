import styled, { css } from "styled-components";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import TeamIcon from "./Icons/TeamIcon";
import GameIcon from "./Icons/GamesIcon";
import CarIcon from "./Icons/CarIcon";
import NavIcon from "./Icons/NavIcon";
import HomeIcon from "./Icons/HomeIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import Divider from "@mui/material/Divider";
import React from "react";
import { useHistory } from "react-router-dom";

const SideMenuDiv = styled.div`
  border-color: solid, 1px, grey;
  color: #2e388d;
  text-align: right;
  width: 100%;
  display: block;
  .MenuList {
    text-align: right;
    border-color: solid, 1px, grey;
  }
`;
const OneMenuItem = styled.div``;

const SideMenu = ({ setShowSideMenu, onMenuItemSelection }) => {
  const handleMenuItemClick = (index: number) => {
    onMenuItemSelection(option[index].path);
    setShowSideMenu(false);
  };
  const option = [
    { className: "main", text: "ראשי", path: "/usersHomePage", icon: HomeIcon },
    {
      className: "getToKnowTheTeam",
      text: "הכר את הצוות",
      path: "/getToKnowTheTeam",
      icon: TeamIcon,
    },
    {
      className: "navigation",
      text: "דרכי הגעה",
      path: "/car",
      icon: CarIcon,
    },
    {
      className: "navigationInHospital",
      text: "ניווט בבית החולים",
      path: "/navInHospital",
      icon: NavIcon,
    },
    {
      className: "entertainment",
      text: "פעילות לזמן המתנה",
      path: "/game",
      icon: GameIcon,
    },
    {
      className: "logout",
      text: "התנתקות",
      path: "/logout",
      icon: LogoutIcon,
    },
  ];
  return (
    <SideMenuDiv>
      <MenuList className="MenuList">
        {option.map(function (anObjectMapped, index) {
          return (
            <OneMenuItem key={index}>
              {index != 0 ? <Divider /> : null}
              <MenuItem
                key={index}
                className={anObjectMapped.className}
                onClick={(event) => handleMenuItemClick(index)}
              >
                {anObjectMapped.icon()}
                <ListItemText key={index}>{anObjectMapped.text}</ListItemText>
              </MenuItem>
            </OneMenuItem>
          );
        })}
      </MenuList>
    </SideMenuDiv>
  );
};

export default SideMenu;
