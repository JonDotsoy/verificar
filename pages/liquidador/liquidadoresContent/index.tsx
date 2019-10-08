import React from "react";

import styled from "styled-components";
import LiquidadoresHeader from "./liquidadoresHeader";
import LiquidadoresList from "./liquidadoresList";

export default () => {
    return (
        <TalleresContainer>
            <LiquidadoresHeader />
            <LiquidadoresList />
        </TalleresContainer>
    )
}

const TalleresContainer = styled.div`
  width:80%;
  margin: 25px auto;
`;