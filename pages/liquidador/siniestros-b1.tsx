import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
`;

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>


      </Container>

    </ContainerComponent>
  </>;
}
