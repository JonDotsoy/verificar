import React from "react";

import styled from "styled-components";
import LiquidadoresHeader from "./liquidadoresHeader";
import LiquidadoresList from "./liquidadoresList";





export default ({
    showSiniestroLiquidador = () => { },
}) => {
    return (
        <LContainer>
            <LiquidadoresHeader />
            <LiquidadoresList
                showSiniestroLiquidador={showSiniestroLiquidador}

            />
        </LContainer>
    )
}

const LContainer = styled.div`
  width:90%;
  margin: 25px auto;
  @media(max-width:750px){
    width:100%;
}
`;