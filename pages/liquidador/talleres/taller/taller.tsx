import NavBarLiquidadorComponent from "../../../../libs/components/Navbar/NavBarLiquidador.component";
import Container from '../../../../libs/components/Container';
import ContainerMenuLateralLiquidadorComponent from "../../../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from "styled-components";
import { ContainerMenuTop, BtnNavitagionSinister } from "../../../../libs/components/NavigationSinister.component";
import AlertHandDrawnSymbolComponent from "../../../../libs/components/icons/AlertHandDrawnSymbol.component";
import Carmechanic89096Component from "../../../../libs/components/icons/Carmechanic89096.component";
import IconPricingComponent from "../../../../libs/components/icons/IconPricing.component";
import { TitlePresupuesto } from "../../../../libs/components/TitlePresupuesto";
import TallerDetail from "../../../../libs/components/TallerDetail";
import { MenuTaller } from "../../../../libs/components/MenuTaller";

const Content = styled.div({});

export default () => {
  return <>
    <NavBarLiquidadorComponent></NavBarLiquidadorComponent>

    <Container>

      <ContainerMenuLateralLiquidadorComponent></ContainerMenuLateralLiquidadorComponent>

      <div style={{ width: '100%' }}>
        <Content>
          <MenuTaller></MenuTaller>

          <TitlePresupuesto><h1>Taller Protuerca</h1></TitlePresupuesto>

          <TallerDetail></TallerDetail>

        </Content>

      </div>

    </Container>
  </>;
}
