import React from 'react';
import Ui from "./ui";
import styled from "styled-components";
import LayoutViews from "../../../../libs/components/layoutViews";
import NavViews from "../../../../libs/components/navViews";
import navData from "../navData";

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
