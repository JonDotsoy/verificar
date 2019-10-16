import React from "react";
import styled from "styled-components";
import Left from "./left";
import Right from "./right";

export default () => {
    return (


        <InfoContainer>
            <Left />
            <Right />
        </InfoContainer>


    )
}


const InfoContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

