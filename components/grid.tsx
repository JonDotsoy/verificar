import React from 'react';
import styled from "styled-components";

const GridStyle = styled.table`
  width: 100%;
`;

export const Grid = ({ children: [childrenHead, ...children], showHead = true, ...props }: any) => <GridStyle {...props}>
  {showHead &&
    <thead>
      {childrenHead}
    </thead>
  }
  <tbody>
    {children}
  </tbody>
</GridStyle>;

export const Row = styled.tr``
export const Column = styled.col``
export const Cell = styled.td``
