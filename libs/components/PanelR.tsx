import React from 'react';
import styled from "styled-components";

export const PanelRContainer = styled.div`
  display: block;
  font-family: 'Source Sans Pro', sans-serif;
  overflow: hidden;
`;

const PanelRHeaderStyled = styled.div`
  background-color: rgb(198, 200, 201);
  padding: 10px;

  h1 {
    max-width: 1000px;
    margin: auto;
    color: rgb(73, 85, 88);
    text-transform: uppercase;
    font-size: 20px;
    padding-left: 12px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: rgb(251, 255, 9);
      border-radius: 100%;
      left: 0px;
      top: 50%;
      margin-top: -3px;
    }
  }

  h2 {
    color: #9fe4fa;
    font-size: 19px;
  }
`;

export const PanelRHeader = ({ title = '[title]', ...props }: { title: string }) => <PanelRHeaderStyled {...props}>
  <h1>{title}</h1>
</PanelRHeaderStyled>;

export const PanelRBody = styled.div`
  padding: 10px;
  background-color: white;
  max-width: calc(1000px - 12px);
  margin: auto;
`;
