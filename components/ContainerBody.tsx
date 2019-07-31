import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: block;
`;

const Box = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1370px) {
    margin: 20px 20px;
  }
`;

export default ({ children, ...props }: {
  [x: string]: any;
  children?: any;
}) => <Container>
    <Box>
      {children}
    </Box>
  </Container>;
