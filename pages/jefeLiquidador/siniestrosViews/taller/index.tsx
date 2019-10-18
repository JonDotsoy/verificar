import React from "react";
import styled from "styled-components";
import Ui from "./ui";
import LayoutViews from "../../../../libs/components/layoutViews";
import Nav from "../nav";

export default () => {
    return (
        <LayoutViews user="jefe">
            <DirectionCenter>
                <Nav />
                <Ui />
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
