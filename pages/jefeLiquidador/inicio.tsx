import React from 'react';
import Container from '../../libs/components/Container';
import ContainerBody from '../../libs/components/ContainerBody';
import NavBarJefeLiquidador from '../../libs/components/Navbar/NavBarJefeLiquidador';
import ContainerMenuLateralJefeLiquidadorComponent from '../../libs/components/MenuLateral/ContainerMenuLateralJefeLiquidador.component';

export default () => {
  return <>
    <NavBarJefeLiquidador></NavBarJefeLiquidador>

    <Container>
      <ContainerMenuLateralJefeLiquidadorComponent></ContainerMenuLateralJefeLiquidadorComponent>

      <ContainerBody>
      </ContainerBody>

    </Container>
  </>;
}