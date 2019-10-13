import React, { useState } from "react";
import styled from "styled-components";
import SHeader from "./header";
import List from "./list";
import AsignarSiniestro from "./asignarSiniestro";

export default () => {
    const [goAsignarS, setGoAsignarS] = useState(false);
    const showSetGoAsignarS = () =>  setGoAsignarS(true);
    const hideSetGoAsignarS = () =>  setGoAsignarS(false);

    return (
        <LContainer>
            {
                goAsignarS ?
                    <AsignarSiniestro hideSetGoAsignarS={hideSetGoAsignarS} />
                    :
                    <>
                        <SHeader />
                        <List showSetGoAsignarS={showSetGoAsignarS} />
                    </>
            }

        </LContainer>
    )
}

const LContainer = styled.div`
  width:80%;
  margin: 25px auto;
  @media(max-width:750px){
    width:100%;
}
`;