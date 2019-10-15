import React, { useState } from "react";

import styled from "styled-components";
import LiquidadoresHeader from "./liquidadoresHeader";
import LiquidadoresList from "./liquidadoresList";
import LDetail from "./liquidadorDetail";




export default ({
    showSiniestroLiquidador=()=>{},
}) => {
    const [renderList, setRenderList] = useState(true)
    return (
        <>
            {
                renderList ?
                    <LContainer>
                        <LiquidadoresHeader />
                        <LiquidadoresList 
                            showSiniestroLiquidador={showSiniestroLiquidador}
                    
                        />
                    </LContainer>
                    :
                    <LDetail />
            }

        </>
    )
}

const LContainer = styled.div`
  width:90%;
  margin: 25px auto;
  @media(max-width:750px){
    width:100%;
}
`;