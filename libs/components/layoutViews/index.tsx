import React from 'react';
import styled from "styled-components";
import Container from '../Container';
import NavBarLiquidador from '../Navbar/NavBarLiquidador.component';
import NavBarJefeLiquidador from '../Navbar/NavBarJefeLiquidador';
import ContainerMenuLateralJefeLiquidadorComponent from '../MenuLateral/ContainerMenuLateralJefeLiquidador.component';
import MenuNavComponent from "../MenuLateral/ContainerMenuLateralLiquidador.component";


interface PropsComp {
    user?: string;
    children?: any;

}

export default ({ user, children }: PropsComp) => {
    const renderMenu = () => {
        if (user && user === "jefe") {
            return (<>
                <NavBarJefeLiquidador></NavBarJefeLiquidador>
                <Container>
                    <ContainerMenuLateralJefeLiquidadorComponent />
                    <ContainerChildren>
                        {children}
                    </ContainerChildren>

                </Container>

            </>
            );
        } else {
            return (
                <>
                    <NavBarLiquidador></NavBarLiquidador>
                    <Container>
                        <MenuNavComponent />
                        <ContainerChildren>
                            {children}
                        </ContainerChildren>
                    </Container>
                </>
            );
        }
    }

    return renderMenu();
        
        
    
}

const ContainerChildren = styled.div`
   width:100%;
`;