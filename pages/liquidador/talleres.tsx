import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateralLiquidador.component";

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>
    </ContainerComponent>
  </>;
}
