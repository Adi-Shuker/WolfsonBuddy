import styled, { css } from "styled-components";

const Back = styled.div`
  width: 40px;
  height: 40px;
  fill: #2e388d;
  margin-top: 8px;
  margin-left: 10px;
  &:hover svg {
    cursor: pointer;
  }
`;

const BackIcon = () => {
  return (
    <Back>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <title />
        <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z" />
      </svg>
    </Back>
  );
};

export default BackIcon;
