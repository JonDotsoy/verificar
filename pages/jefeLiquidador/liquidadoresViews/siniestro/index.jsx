import React from "react";
import styled from "styled-components";
import Nav from "../nav";
import SearchIcon from "../../../../libs/components/icons/BaselineSearch.component";
import List from "./list";
import InputS from "../../../../libs/components/inputSearch";

export default ({
  listLiquidadores = () => { },
  showPresupuestoLiquidador = () => { }
}) => {
  return (
    <SContainer>
      <Nav
        listLiquidadores={listLiquidadores}
        showPresupuestoLiquidador={showPresupuestoLiquidador}
      />
      <InputS
        stylesContainer={{ background: "#EB780E" }}
        placeholder={"buscar siniestro"}
        stylesInput={{ textAlign: "center" }}
      />
      <TitleList>
        <h2 className="title">Siniestros Asociados</h2>
      </TitleList>
      <List />
    </SContainer>
  )
}


const SContainer = styled.div`
  width:80%;
  margin: 25px auto;
  @media (max-width: 768px) {
    width:100%;
  }
`;

const InputSearch = styled.div`
    margin:30px auto 0 auto;
    max-width:500px;
    background:#EB780E;
    padding:12px 20px;
    border-radius:20px;
    position:relative;
    .talleres_input_form{
        text-align:center;
        height: 100%;
        border:none;
        background:transparent;
        width:100%;
        font-size:16px;
        font-weight:bold;
        color:rgba(255,255,255,.8);
        text-transform:uppercase;
        &:focus{
          outline: none;
        }
      }
     .talleres_input_form::placeholder{
        color:rgba(255,255,255,.7);
    }
    .talleres_search_icon{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:10px;
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