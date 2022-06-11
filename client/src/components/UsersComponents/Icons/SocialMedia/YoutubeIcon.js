import styled, { css } from "styled-components";

const Youtube = styled.div`
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

const YoutubeIcon = () => {
  return (
    <Youtube>
      <svg
        className="svgSocialMedia"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 242.667 242.667"
      >
        <path
          d="M106.955,94.325l39.161,27.008l-39.161,27.008V94.325z M242.667,0v242.667H0V0H242.667z M190.25,101.494
	c0-16.378-13.277-29.655-29.655-29.655H82.072c-16.378,0-29.655,13.277-29.655,29.655v39.679c0,16.378,13.277,29.655,29.655,29.655
	h78.523c16.378,0,29.655-13.277,29.655-29.655V101.494z"
        />
      </svg>
    </Youtube>
  );
};

export default YoutubeIcon;
