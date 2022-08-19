import MenuIcon from "./Icons/MenuIcon.js";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import React, { useCallback, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Redirect, Route, useHistory } from "react-router-dom";
import "./HeaderStyle.css";
import FacebookIcon from "./Icons/SocialMedia/FacebookIcon";
import InstagramIcon from "./Icons/SocialMedia/InstagramIcon";
import TwitterIcon from "./Icons/SocialMedia/TwitterIcon";
import LinkedInIcon from "./Icons/SocialMedia/LinkedInIcon";
import TiktokIcon from "./Icons/SocialMedia/TiktokIcon";
import YoutubeIcon from "./Icons/SocialMedia/YoutubeIcon";
import { Link } from "@mui/material";
import { IsAdminContext } from "../../App";
import BackIcon from "./Icons/BackIcon";
const FooterDiv = styled.div`
  direction: rtl;
  padding-top: 35px;
  height: 53px;
  margin-top: calc(10vh - 53px);

  .BackIconDiv {
    width: 60px;
    height: 60px;
    border-radius: 150px;
    display: block;

    left: 26px;
    bottom: 85px;
    right: 0;
  }

  .IconLine {
    background-color: ${({ isAdmin }) => (isAdmin ? "#2e388d" : " #feb914")};
    path {
      fill: ${({ isAdmin }) => (!isAdmin ? "#2e388d" : " #feb914")};
    }
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
  }
`;

const Footer = ({ showBackIcon }) => {
  const { isAdmin, setIsAdmin } = React.useContext(IsAdminContext);
  const history = useHistory();
  return (
    <FooterDiv className={"Footer isAdmin-" + isAdmin} isAdmin={isAdmin}>
      {showBackIcon ? (
        <div
          className={"BackIconDiv iconWrapper lightGreyBorder"}
          onClick={() => {
            window.scrollTo(0, 0);
            history.push("/usersHomePage");
          }}
        >
          <BackIcon />
        </div>
      ) : null}
      <span>בקרו אותנו גם ב:</span>
      <div className={"IconLine"}>
        <a href="https://www.facebook.com/WolfsonMedicalCenter" target="_blank">
          <FacebookIcon className={"icon"} />
        </a>
        <a
          href="https://www.instagram.com/wolfson_medical_center/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com/user/WolfsonMedical" target="_blank">
          <YoutubeIcon />
        </a>
        <a href="https://twitter.com/Wolfson_Med" target="_blank">
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/wolfson-medical-center/?viewAsMember=true"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
    </FooterDiv>
  );
};

export default Footer;
