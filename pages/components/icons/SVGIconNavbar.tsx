import styled from "styled-components";

export const BaseSVGIconNavbar = styled.svg`
  width: 40px;
  height: 40px;
`;

export const SVGIconNavbarWhite = styled(BaseSVGIconNavbar.withComponent('svg'))`
  fill: white;
`;

export const SVGIconNavbarOrange = styled(BaseSVGIconNavbar.withComponent('svg'))`
  fill: orange;
`;
