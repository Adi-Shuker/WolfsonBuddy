import styled, { css } from "styled-components";

const LinkedIn = styled.div`
  width: 40px;
  height: 40px;
  fill: #2e388d;
  margin-top: 8px;
  margin-left: 10px;
  border-radius: 10px;
  .svgSocialMedia {
    border-radius: 10px;
  }
  &:hover svg {
    cursor: pointer;
  }
`;

const LinkedInIcon = () => {
  return (
    <LinkedIn>
      <svg
        className="svgSocialMedia"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 455 455"
      >
        <path
          d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
		 M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
		c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
		c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
		c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
		z"
        />
      </svg>
    </LinkedIn>
  );
};

export default LinkedInIcon;
