import React from "react";
import styled from "styled-components";
import Left from "./left";
import Right from "./right";
import LayoutViews from "../../../../libs/components/layoutViews";
import Nav from "../nav";

export default () => {
    return (

        <LayoutViews user="jefe">
            <Nav />
    
                <InfoContainer>
                    <Left />
                    <Right />
                </InfoContainer>
         
        </LayoutViews>
    )
}


const InfoContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:90%;
    margin:0 auto;
    @media(max-width:780px){
        width:100%;
      }
`;

