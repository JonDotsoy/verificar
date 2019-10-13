import React, { useState } from "react";

import styled from "styled-components";
import LiquidadoresHeader from "./liquidadoresHeader";
import LiquidadoresList from "./liquidadoresList";
import LDetail from "./liquidadorDetail";

export default () => {
    const [renderList, setRenderList] = useState(true)
    return (
        <>
            {
                renderList ?
                    <LContainer>
                        <LiquidadoresHeader />
                        <LiquidadoresList />
                    </LContainer>
                    :
                    <LDetail />
            }

        </>
    )
}

const LContainer = styled.div`
  width:80%;
  margin: 25px auto;
  @media(max-width:750px){
    width:100%;
}
`;