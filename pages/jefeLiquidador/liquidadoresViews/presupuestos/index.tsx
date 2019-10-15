import React from "react";

import styled from "styled-components";
import Nav from "../nav";
import List from "./list";
import InputS from "../../../../libs/components/inputSearch";


export default ({
  listLiquidadores = () => { },
  showSiniestroLiquidador = () => { }
}) => {
  return (
    <PresuContainer>
      <Nav
        listLiquidadores={listLiquidadores}
        showSiniestroLiquidador={showSiniestroLiquidador}
      />
      <InputS
        stylesContainer={{ background: "#EB780E" }}
        placeholder={"buscar presupuesto"}
        stylesInput={{ textAlign: "center" }}
      />
      <TitleList>
        <h2 className="title">Presupuestos Asociados</h2>
      </TitleList>
      <List />
    </PresuContainer>
  )
}

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


const PresuContainer = styled.div`
  width:80%;
  margin: 25px auto;
  @media (max-width: 768px) {
    width:100%;
  }
`;

