import React from 'react';
import Container from '../../libs/components/Container';
//import ContainerBody from '../../libs/components/ContainerBody';
import NavBarJefeLiquidador from '../../libs/components/Navbar/NavBarJefeLiquidador';
import ContainerMenuLateralJefeLiquidadorComponent from '../../libs/components/MenuLateral/ContainerMenuLateralJefeLiquidador.component';

import SiniestroView from "./siniestrosViews";
import styled from "styled-components";

export default () => {
  return <>
    <NavBarJefeLiquidador></NavBarJefeLiquidador>

    <Container>
      <ContainerMenuLateralJefeLiquidadorComponent></ContainerMenuLateralJefeLiquidadorComponent>



  
        <SiniestroView />
  


    </Container>
  </>;
}





//  <ContainerBody></ContainerBody>