import React from "react";
import styled from "styled-components";
import Ui from "./ui";
import LayoutViews from "../../../../libs/components/layoutViews";
import NavViews from "../../../../libs/components/navViews";
import navData from "../../../../libs/jefeLiquidadorSiniestrosViewsNavData";

export default () => {
    return (
        <LayoutViews user="jefe">
            <DirectionCenter>
                <NavViews data={navData} />
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
