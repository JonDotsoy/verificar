import React from 'react';
import styled from 'styled-components';

const ContainerMenuTop = styled.div`
  background-color: red;
  height: 200px;
  display: block;
`;

export default ({ ...props }) => {
  return <ContainerMenuTop {...props}>

  </ContainerMenuTop>;
}
