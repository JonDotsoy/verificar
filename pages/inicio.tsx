import React, { DetailedHTMLProps } from 'react';
import NavBarComponent from '../components/Navbar/NavBar.component';
import ContainerComponent from '../components/Container';
import Head from 'next/head';
import ResetCSS from "../components/ResetCSS";
import MenuNavComponent from "../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import MetricReparationsComponent from '../components/panels/MetricReparations.component';
import CarPerZoneComponent from '../components/panels/CarPerZone.component';
import SummaryGarageComponent from '../components/panels/SummaryGarage.component';
import MetricsCarComponent from '../components/panels/MetricsCar.component';
import ContainerBody from '../components/ContainerBody';

const ItemBox = styled.div`
  flex: 1;
  min-width: 400px;
  padding: 0px 30px 30px 30px;
`;

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>

      <ContainerBody>

        <ItemBox>
          <MetricReparationsComponent></MetricReparationsComponent>
        </ItemBox>

        <ItemBox>
          <CarPerZoneComponent></CarPerZoneComponent>
        </ItemBox>

        <ItemBox>
          <MetricsCarComponent></MetricsCarComponent>
        </ItemBox>

        <ItemBox>
          <SummaryGarageComponent></SummaryGarageComponent>
        </ItemBox>

      </ContainerBody>

    </ContainerComponent>
  </>;
}
