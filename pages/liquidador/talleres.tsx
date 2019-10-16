import React, { useState } from 'react';
import NavBarComponent from '../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../libs/components/Container';
import MenuNavComponent from "../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";



import TallerDetail from "./talleres/TallerDetail";
import List from "./talleres/list";

export default () => {
  const [detailRender, setDetailRender] = useState(false);
  const goDetails = () => {
    setDetailRender(true);
  }
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>

      <List />

    </ContainerComponent>
  </>;
}


