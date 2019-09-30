import React from 'react';
import NavBarComponent from '../../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../../libs/components/Container';
import MenuNavComponent from "../../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../../libs/components/NavigationSinister.component';
import { TitlePresupuesto } from '../../../libs/components/TitlePresupuesto';

const Container = styled.div`
  flex-grow: 1;
`;

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <NavigationSinisterComponent></NavigationSinisterComponent>

        <TitlePresupuesto><h1>Sinistro JF 25RT</h1></TitlePresupuesto>

      </Container>
    </ContainerComponent>
  </>
};
