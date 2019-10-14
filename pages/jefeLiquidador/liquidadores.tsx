import React from 'react';
import Container from '../../libs/components/Container';
//import ContainerBody from '../../libs/components/ContainerBody';
import NavBarJefeLiquidador from '../../libs/components/Navbar/NavBarJefeLiquidador';
import ContainerMenuLateralJefeLiquidadorComponent from '../../libs/components/MenuLateral/ContainerMenuLateralJefeLiquidador.component';

import LiquidadoresList from "./liquidadoresViews/list";
import styled from "styled-components";

export default () => {
  return <>
    <NavBarJefeLiquidador></NavBarJefeLiquidador>

    <Container>
      <ContainerMenuLateralJefeLiquidadorComponent></ContainerMenuLateralJefeLiquidadorComponent>


      <BoxMain>
        <LiquidadoresList />
      </BoxMain>

    </Container>
  </>;
}

const BoxMain = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
`;

// <ContainerBody></ContainerBody>