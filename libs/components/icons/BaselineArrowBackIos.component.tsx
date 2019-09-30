import React from 'react';
import { SVGIconNavbarWhite } from "./BaseSVGIcon.component";
import styled from 'styled-components';

const SVGIcon = styled(SVGIconNavbarWhite)`
  &.revert {
    transform: rotate(180deg);
  }
`;

export default ({ className }: { className?: string }) =>
  <SVGIcon className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /><path fill="none" d="M0 0h24v24H0z" /></SVGIcon>
