import React from 'react';
import styled from "styled-components";
import { BaseSVGIcon } from '../icons/BaseSVGIcon.component';

const Title = styled.div`
  flex: 1;
  font-family: 'Source Sans Pro', sans-serif;
  color: #818e9a;
  font-size: 24px;
`;

const IconContainer = styled.div`
  margin: 0px 28px;
`;

const style = ({ actived }: {
  actived?: boolean;
}) => actived && `
  background-color: #0c1d25;

  &::after {
    content: "";
    background-color: #fe9a01;
    position: absolute;
    width: 12px;
    height: 24px;
    z-index: 1;
    top: 50%;
    right: 0px;
    margin-top: -12px;
    border-radius: 100px 0px 0px 100px;
  }

  &::before {
    content: "";
    background-color: #fe9a01;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    z-index: 1;
    width: 3px;
  }

  ${BaseSVGIcon} {
    fill: #fe9a01;
  }
  ${Title} {
    color: #fe9a01;
  }
`;

const sizeIcon = '35px';

const ItemMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 70px;
  border-bottom: solid 1px #818e9a;

  ${() => `
  
    ${BaseSVGIcon} {
      width: ${sizeIcon};
      height: ${sizeIcon};
      fill: #818e9a;
    }

  `}
  
  ${style}
`;

// ---

type Props = {
  title?: string;
  actived?: boolean;
  Icon?: any;
};

export default ({
  title = '{title}',
  actived = false,
  Icon = () => null,
}: Props) =>
  <ItemMenu actived={actived}>
    <IconContainer><Icon></Icon></IconContainer>
    <Title>{title}</Title>
  </ItemMenu>
