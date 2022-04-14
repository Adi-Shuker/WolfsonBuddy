import styled, { css } from "styled-components";

const Car = styled.div`
  width: 40px;
  height: 40px;
  fill: #2e388d;
  &:hover svg {
    cursor: pointer;
  }
`;

const CarIcon = ({ onClick }) => {
  return (
    <Car onClick={onClick}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/1999/xlink"
        viewBox="-70 -70 530 530"
      >
        <path
          d="M388.223,160.284h-22.944l-30-136.252H52.943l-30,136.252H0v139.15h20v64.756h100v-64.756h148.223v64.756h100v-64.756h20
		V160.284z M30,269.435v-79.15h328.223v79.15H30z M77.057,54.032h234.109l23.395,106.252H53.662L77.057,54.032z M90,334.19H50
		v-34.756h40V334.19z M338.223,334.19h-40v-34.756h40V334.19z"
        />
      </svg>
    </Car>
  );
};

export default CarIcon;
