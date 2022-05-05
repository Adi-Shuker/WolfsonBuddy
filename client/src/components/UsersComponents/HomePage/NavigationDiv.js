import React from "react";
import styled from "styled-components";

const NavAppIcon = styled.div`
  height: 60px;
  width: 60px;
  // border-radius: 10px;
  // border-size: 1px;
  // border-style: solid;
  // border-color: #2e388d;
  item-align: center;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const NavigationDiv = (props) => {
  return (
    <div className="navIconLine">
      <NavAppIcon>
        <a
          href="https://ul.waze.com/ul?preview_venue_id=22806848.227806340.13314&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <img
            src={require("../../../images/icon-waze.png")}
            width="100%"
            height="100%"
            alt="icon-waze"
          />
        </a>
      </NavAppIcon>
      <NavAppIcon>
        <a href="https://goo.gl/maps/rd1eR8WrnqL7Ktcx9" target="_blank">
          <img
            src={require("../../../images/google-map-logo.jpg")}
            width="100%"
            height="100%"
            alt="google-map-logo"
          />
        </a>
      </NavAppIcon>
      <NavAppIcon>
        <a
          href="https://moovitapp.com/israel-1/poi/%D7%91%D7%99%D7%AA%20%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%95%D7%95%D7%9C%D7%A4%D7%A1%D7%95%D7%9F/t/en?tll=32.03652_34.761064"
          target="_blank"
        >
          <img
            src={require("../../../images/moovit-logo.jpg")}
            width="100%"
            height="100%"
            alt="moovit-logo"
          />
        </a>
      </NavAppIcon>
      <NavAppIcon>
        <a
          href="https://gett.com/il/diresnt/?shortlink=e0c54d76&pid=Web&c=DTA_IL_Web"
          target="_blank"
        >
          <img
            src={require("../../../images/get-texi-icon.png")}
            width="100%"
            height="100%"
            alt="get-texi-icon"
          />
        </a>
      </NavAppIcon>
    </div>
  );
};

export default NavigationDiv;
