import styled, { css } from "styled-components";

const News = styled.div`
  width: 40px;
  height: 40px;
  fill: #2e388d;
  &:hover svg {
    cursor: pointer;
  }
`;

const NewsIcon = ({ onClick }) => {
  return (
    <News onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 -30 300 300">
        <path
          d="M235.437,60.699h-31.709V30.927c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5v161.478
		c0,14.945,12.159,27.104,27.104,27.104h188.728c14.945,0,27.105-12.159,27.105-27.104V68.199
		C242.937,64.057,239.579,60.699,235.437,60.699z M15,192.405V38.427h173.728v29.771v124.206c0,4.349,1.036,8.458,2.864,12.104
		H27.104C20.43,204.509,15,199.079,15,192.405z M215.832,204.509c-6.674,0-12.104-5.43-12.104-12.104V75.699h24.209v116.706
		C227.937,199.079,222.506,204.509,215.832,204.509z"
        />
        <path
          d="M39.351,78.374h125.025c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H39.351c-4.142,0-7.5,3.358-7.5,7.5
		C31.851,75.016,35.208,78.374,39.351,78.374z"
        />
        <path
          d="M39.008,115.893c0,12.44,10.12,22.561,22.56,22.561c12.438,0,22.558-10.121,22.558-22.561
		c0-12.441-10.119-22.563-22.558-22.563C49.128,93.33,39.008,103.452,39.008,115.893z M69.125,115.893
		c0,4.169-3.39,7.561-7.558,7.561c-4.168,0-7.56-3.392-7.56-7.561c0-4.17,3.391-7.563,7.56-7.563
		C65.735,108.33,69.125,111.723,69.125,115.893z"
        />
        <path
          d="M39.351,180.02c4.142,0,7.5-3.358,7.5-7.5v-8.361c0-3.899,3.174-7.072,7.075-7.072h15.277c3.903,0,7.078,3.172,7.078,7.072
		v8.361c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-8.361c0-12.17-9.904-22.072-22.078-22.072H53.926
		c-12.172,0-22.075,9.901-22.075,22.072v8.361C31.851,176.662,35.208,180.02,39.351,180.02z"
        />
        <path
          d="M164.376,97.063h-57.763c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5
		C171.876,100.421,168.518,97.063,164.376,97.063z"
        />
        <path
          d="M164.376,164.443h-57.763c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5
		S168.518,164.443,164.376,164.443z"
        />
        <path
          d="M164.376,130.753h-57.763c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5
		C171.876,134.111,168.518,130.753,164.376,130.753z"
        />
      </svg>
    </News>
  );
};

export default NewsIcon;
