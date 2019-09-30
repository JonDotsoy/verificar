import React from 'react';
import NavBarComponent from '../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../libs/components/Container';
import MenuNavComponent from "../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from 'styled-components';
import MetricReparationsComponent from '../../libs/components/panels/MetricReparations.component';
import CarPerZoneComponent from '../../libs/components/panels/CarPerZone.component';
import SummaryGarageComponent from '../../libs/components/panels/SummaryGarage.component';
import MetricsCarComponent from '../../libs/components/panels/MetricsCar.component';
import ContainerBody from '../../libs/components/ContainerBody';

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
