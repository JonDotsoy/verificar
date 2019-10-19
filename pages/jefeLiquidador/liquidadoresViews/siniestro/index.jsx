import React from "react";
import styled from "styled-components";
import List from "./list";
import InputS from "../../../../libs/components/inputSearch";
import LayoutViews from "../../../../libs/components/layoutViews";
import NavViews from "../../../../libs/components/navViews";
import navData from "../navData";

export default () => {
  return (
    <LayoutViews user="jefe">
       <NavViews data={navData} classCss={"max-width:350px;margin:10px auto 15px auto;"} />
      <InputS
        stylesContainer={{ background: "#EB780E" }}
        placeholder={"buscar siniestro"}
        stylesInput={{ textAlign: "center" }}
      />
      <DirectionCenter>
        <TitleList>
          <h2 className="title">Siniestros Asociados</h2>
        </TitleList>

        <List />
      </DirectionCenter>
    </LayoutViews>
  )
}


const DirectionCenter = styled.div`
    width:90%;
    margin:0 auto;
    @media(max-width:780px){
      width:100%;
    }
`;


const TitleList = styled.div`
background:#EB780E;
margin:20px 0 0 0;
padding:1.5rem 1rem;
 .title{
  color:white;
  text-transform:uppercase;
  text-align:center;
  font-size:23px;
  font-weight:bold;
}
`;