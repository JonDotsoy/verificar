import React from 'react';
import Container from '../../libs/components/Container';
import ContainerMenuLateralLiquidador from "../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import ContainerBody from '../../libs/components/ContainerBody';
import NavBarJefeLiquidador from '../../libs/components/Navbar/NavBarJefeLiquidador';

export default () => {
  return <>
    <NavBarJefeLiquidador></NavBarJefeLiquidador>

    <Container>
      <ContainerMenuLateralLiquidador></ContainerMenuLateralLiquidador>

      <ContainerBody>
      </ContainerBody>

    </Container>
  </>;
}
