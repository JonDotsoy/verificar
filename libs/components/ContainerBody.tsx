import React from 'react';
import styled from 'styled-components';
import { declareRemplace } from '../renameClassNames';

const Box = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1370px) {
    margin: 20px 20px;
  }
`;

const Container = styled.div`
  flex: 1;
  display: block;

  ${({ containerFluid }: { containerFluid?: boolean }) => containerFluid && `
    ${Box} {
      display: block;
      max-width: initial;
      @media (max-width: 1370px) {
        margin: 0px 0px;
      }
    }
  `}
`;

declareRemplace(Container, 'container');

export default ({ children, ...props }: {
  [x: string]: any;
  children?: any;
}) => <Container {...props}>
    <Box>
      {children}
    </Box>
  </Container>;
