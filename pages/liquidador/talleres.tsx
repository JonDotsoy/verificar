import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>
    </ContainerComponent>
  </>;
}
