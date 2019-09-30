import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
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
