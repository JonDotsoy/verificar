import React from "react";
import styled from "styled-components";
import Left from "./left";
import Right from "./right";
import LayoutViews from "../../../../libs/components/layoutViews";
import Nav from "../nav";

export default () => {
    return (

        <LayoutViews user="jefe">
            <DirectionCenter>
                <Nav />
                <InfoContainer>
                    <Left />
                    <Right />
                </InfoContainer>
            </DirectionCenter>
        </LayoutViews>

    )
}

const DirectionCenter = styled.div`
    width:90%;
    margin:12px auto;
    @media(max-width:780px){
      width:100%;
    }
`;


const InfoContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`;
