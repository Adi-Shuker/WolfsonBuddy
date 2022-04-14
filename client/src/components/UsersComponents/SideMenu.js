import styled, { css } from "styled-components";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import TeamIcon from "./Icons/TeamIcon";
import GameIcon from "./Icons/GamesIcon";
import CarIcon from "./Icons/CarIcon";
import NavIcon from "./Icons/NavIcon";
import HomeIcon from "./Icons/HomeIcon";
import Divider from "@mui/material/Divider";
import React from "react";

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

const SideMenu = () => {
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    console.log(index);
    console.log(option[index].path);
  };
  const option = [
    { className: "main", text: "ראשי", path: "/HomePage", icon: GameIcon },
    {
      className: "getToKnowTheTeam",
      text: "הכר את הצוות",
      path: "/getToKnowTheTeam",
      icon: TeamIcon,
    },
    {
      className: "navigation",
      text: "דרכי הגעה",
      path: "/getToKnowTheTeam",
      icon: CarIcon,
    },
    {
      className: "navigationInHospital",
      text: "ניווט בבית החולים",
      path: "/getToKnowTheTeam",
      icon: NavIcon,
    },
    {
      className: "entertainment",
      text: "פעילות לזמן המתנה",
      path: "/getToKnowTheTeam",
      icon: GameIcon,
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
                onClick={(event) => handleMenuItemClick(event, index)}
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
