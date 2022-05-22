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

const FooterDiv = styled.div`
  margin-top: 15px;
  display: grid;

  direction: rtl;
  .isAdmin-true {
      background-color: #2e388d;
      .svgSocialMedia {
    .path {
    fill:pink;
    }
  }
  }
  .isAdmin-false {
      background-color: #feb914;
  }
  .IconLine {
    display: flex;
        justify-content: center;
            padding-bottom: 15px;
    .icon {
    
  }
`;

const Footer = () => {
  const isAdmin = true;
  return (
    <FooterDiv className="Footer">
      <span>בקרו אותנו גם ב:</span>
      <div className={"IconLine isAdmin-" + isAdmin}>
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
        <a
          href="https://www.tiktok.com/@wolfson.medical?_d=secCgYIASAHKAESMgowbB0W2k24do6x%2BD93sEiZega53ETxdpictsiD7Qp4YxaAoxvyi6LnSjPUjDurYDpcGgA%3D&_r=1&language=he&sec_uid=MS4wLjABAAAA9OjyS5RDOyX_XCcWStSwSXHZbKt2hYyX5n2FNNGq8TLqdmgFz2ckKyi2gKJ99z2d&sec_user_id=MS4wLj"
          target="_blank"
        >
          <TiktokIcon />
        </a>
      </div>
    </FooterDiv>
  );
};

export default Footer;
