import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../components/NavigationSinister.component';
import { TitlePresupuesto } from '../../components/TitlePresupuesto';

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

        <TitlePresupuesto><h1>MG 360 JF7H20</h1></TitlePresupuesto>

      </Container>
    </ContainerComponent>
  </>
};
