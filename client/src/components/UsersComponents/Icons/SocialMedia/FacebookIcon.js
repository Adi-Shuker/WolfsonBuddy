import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "@mui/material";
const Facebook = styled.div`
  width: 40px;
  height: 40px;
  fill: #2e388d;
  margin-top: 8px;
  margin-left: 10px;
  .svgSocialMedia {
    border-radius: 10px;
  }
  &:hover svg {
    cursor: pointer;
  }
`;

const FacebookIcon = () => {
  const history = useHistory();
  return (
    <Facebook>
      <svg
        className="svgSocialMedia"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 455 455"
      >
        <path
          d="M460,0H30C13.458,0,0,13.458,0,30v430c0,16.542,13.458,30,30,30h430c16.542,0,30-13.458,30-30V30
				C490,13.458,476.542,0,460,0z M470,460c0,5.514-4.486,10-10,10H30c-5.514,0-10-4.486-10-10V30c0-5.514,4.486-10,10-10h430
				c5.514,0,10,4.486,10,10V460z"
        />
        <path
          d="M0,0v455h455V0H0z M301.004,125.217H265.44
	c-7.044,0-14.153,7.28-14.153,12.696v36.264h49.647c-1.999,27.807-6.103,53.235-6.103,53.235h-43.798V385h-65.266V227.395h-31.771
	v-53.029h31.771v-43.356c0-7.928-1.606-61.009,66.872-61.009h48.366V125.217z"
        />
      </svg>
    </Facebook>
  );
};

export default FacebookIcon;
