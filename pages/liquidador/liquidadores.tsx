import React from 'react';
import NavBarComponent from '../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../libs/components/Container';
import MenuNavComponent from "../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";

/********* jefe   ************/
import JefeView from "../jefeLiquidador/siniestrosViews/list";
/********* jefe   ************/


export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>
      {
        /********* jefe   ************/
          <JefeView />
        /********* jefe   ************/
      }
      
    </ContainerComponent>
  </>;
}
