import React, { useState } from "react";
import styled from "styled-components";

const secretariatInfoDiv = styled.div``;

const secretariatInfo = () => {
  const textArr = [
    "מזכירות וקבלה",
    "זימון תורים: 03-5028111",
    "zimuntorim@wmc.gov.il",
    "טלפון: 03-5028618",
    "פקס: 03-5028274",
    "א'-ה' 8:00-15:00",
  ];
  return (
    <divInfo>
      {textArr.map(function (item) {
        return <div>{item}</div>;
      })}
    </divInfo>
  );
};

export default secretariatInfo;
