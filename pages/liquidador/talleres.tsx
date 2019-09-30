import React from 'react';
import NavBarComponent from '../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../libs/components/Container';
import MenuNavComponent from "../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>
    </ContainerComponent>
  </>;
}
