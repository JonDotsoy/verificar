import React from "react";
import styled from "styled-components";
import SHeader from "./header";
import List from "./list";

export default () => {
    return (
        <LContainer>
            <SHeader />
            <List />
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