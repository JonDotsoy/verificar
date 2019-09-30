import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateralLiquidador.component";
import SinisterBudget from '../../components/panels/SinisterBudget.component';
import SinisterUncheckedBudgetComponent from '../../components/panels/SinisterUncheckedBudget.component';
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

        <SinisterBudget />

        <SinisterUncheckedBudgetComponent />

      </Container>

    </ContainerComponent>
  </>;
}
