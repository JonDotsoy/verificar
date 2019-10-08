import React from 'react';
import NavBarComponent from '../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../libs/components/Container';
import MenuNavComponent from "../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import SinisterBudget from '../../libs/components/panels/SinisterBudget.component';
import SinisterUncheckedBudgetComponent from '../../libs/components/panels/SinisterUncheckedBudget.component';
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
