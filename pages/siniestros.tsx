import React from 'react';
import NavBarComponent from '../components/Navbar/NavBar.component';
import ContainerComponent from '../components/Container';
import Head from 'next/head';
import MenuNavComponent from "../components/MenuLateral/ContainerMenuLateral.component";
import SinisterBudget from '../components/panels/SinisterBudget.component';
import SinisterUncheckedBudgetComponent from '../components/panels/SinisterUncheckedBudget.component';
import styled from 'styled-components';
import ResetCSS from '../components/ResetCSS';

const Container = styled.div`
  flex-grow: 1;
`;

export default () => {
  return <>
    <Head>
      <ResetCSS />
    </Head>

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
