import React from 'react';
import Container from '../../libs/components/Container';
//import ContainerBody from '../../libs/components/ContainerBody';
import NavBarJefeLiquidador from '../../libs/components/Navbar/NavBarJefeLiquidador';
import ContainerMenuLateralJefeLiquidadorComponent from '../../libs/components/MenuLateral/ContainerMenuLateralJefeLiquidador.component';

import LiquidadoresViews from "./liquidadoresViews";


export default () => {
  return <>
    <NavBarJefeLiquidador></NavBarJefeLiquidador>

    <Container>
      <ContainerMenuLateralJefeLiquidadorComponent></ContainerMenuLateralJefeLiquidadorComponent>


      
        <LiquidadoresViews />
    

    </Container>
  </>;
}



// <ContainerBody></ContainerBody>