import React from 'react';
import NavBarComponent from '../../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../../libs/components/Container';
import MenuNavComponent from "../../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../../libs/components/NavigationSinister.component';
import { TitlePresupuesto } from '../../../libs/components/TitlePresupuesto';
import BaselineFace24pxComponent from '../../../libs/components/icons/BaselineFace24px.component';
import BaselineStayPrimaryPortrait24pxComponent from '../../../libs/components/icons/BaselineStayPrimaryPortrait24px.component';
import BaselineMailComponent from '../../../libs/components/icons/BaselineMail.component';
import BaselineLocationOnComponent from '../../../libs/components/icons/BaselineLocationOn.component';
import BaselineLocationCityComponent from '../../../libs/components/icons/BaselineLocationCity.component';
import CarOfHatchbackComponent from '../../../libs/components/icons/CarOfHatchback.component';
import FoldedNewspaperComponent from '../../../libs/components/icons/FoldedNewspaper.component';
import TallerDetail from '../../../libs/components/TallerDetail';

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

        <TitlePresupuesto><h1>Taller Protuerca</h1></TitlePresupuesto>

        <TallerDetail></TallerDetail>

      </Container>
    </ContainerComponent>
  </>
};
