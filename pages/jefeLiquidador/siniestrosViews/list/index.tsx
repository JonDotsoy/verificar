import React, { useState } from "react";
import styled from "styled-components";
import SHeader from "./header";
import List from "./list";
import AsignarSiniestro from "./asignarSiniestro";


interface PropsComp{
    handleMainSection(condition:boolean): any;
}

export default ({handleMainSection}:PropsComp) => {
    const [goAsignarS, setGoAsignarS] = useState(false);
    const handleSetGoAsignarS = (condition:boolean) =>  setGoAsignarS(condition);


    return (
        <LContainer>
            {
                goAsignarS ?
                    <AsignarSiniestro handleSetGoAsignarS={handleSetGoAsignarS} />
                    :
                    <>
                        <SHeader />
                        <List handleMainSection={handleMainSection} handleSetGoAsignarS={handleSetGoAsignarS} />
                    </>
            }

        </LContainer>
    )
}

const LContainer = styled.div`
  width:90%;
  float:right;
  margin: 25px auto;
  @media(max-width:750px){
    width:100%;
}
`;