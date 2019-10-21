import React from 'react';
import styled from "styled-components";
import Container from '../Container';
import NavBarJefeLiquidador from '../Navbar/NavBarJefeLiquidador';
import ContainerMenuLateralJefeLiquidadorComponent from '../MenuLateral/ContainerMenuLateralJefeLiquidador.component';
import MenuNavComponent from "../MenuLateral/ContainerMenuLateralLiquidador.component";


interface PropsComp {
    user?: string;
    children?: any;
    
}

export default ({ user, children }: PropsComp) => {
    const renderNav = () => {
        if (user && user === "jefe") {
            return <ContainerMenuLateralJefeLiquidadorComponent />;
        } else {
            return <MenuNavComponent />;
        }
    }
    return <>
        <NavBarJefeLiquidador></NavBarJefeLiquidador>

        <Container>
            {renderNav()}
            <ContainerChildren>
                {children}
            </ContainerChildren>

        </Container>
    </>;
}

const ContainerChildren = styled.div`
   width:100%;
`;