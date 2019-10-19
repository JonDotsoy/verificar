import React from "react";
import styled from "styled-components";
import Left from "./left";
import Right from "./right";


interface PropsComp {
    classCss?: string;
    info:any;
}

export default ({ classCss,info }: PropsComp) => {
    const InfoContainer = styled.div`
        display:flex;
        flex-wrap:wrap;
        width:90%;
        margin:0 auto;
        @media(max-width:780px){
            width:100%;
        }
        ${classCss}
    `;
    return (
        <InfoContainer>
            <Left info={info} />
            <Right info={info} />
        </InfoContainer>
    )
}
