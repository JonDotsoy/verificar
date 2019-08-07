import React from 'react';
import styled from "styled-components";

const GridStyle = styled.table`
  width: 100%;
`;

export const GridTable = ({ children: [childrenHead, ...children], showHead = true, ...props }: any) => <GridStyle {...props}>
  {showHead &&
    <thead>
      {childrenHead}
    </thead>
  }
  <tbody>
    {children}
  </tbody>
</GridStyle>;

export const RowTable = styled.tr``
export const ColumnTable = styled.col``
export const CellTable = styled.td``

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Col = styled.div`
  flex-basis: 0;
`;
