import React from "react";
import Router from 'next/router';
import AddIcon from "../../../../libs/components/icons/BaselineFace24px.component";
import InputS from "../../../../libs/components/inputSearch";
import ViewHeaderBox from "../../../../libs/components/viewHeaderBox";
import styled from "styled-components";

export default () => {
  const goAddLiquidador = () => {
    Router.push('/jefeLiquidador/liquidadoresViews/addLiquidador');
  }
  return (
    <ViewHeaderBox>
        <Btn onClick={()=>goAddLiquidador()}>
          <AddIcon />
          agregar
        </Btn>
      <InputS handleOnChange={()=>null} />
    </ViewHeaderBox>
  )
}

const Btn = styled.div`
  font-size:13px;
  font-weight:600;
  position:absolute;
  right:5%;
  top:53%;
  transform:translateY(-53%);
  z-index:1;
  cursor:pointer;
  background:#736D6D;
  color:white;
  text-transform:uppercase;
  display:flex;
  align-items:center;
  justify-content:center;
  height:45px;
  width:110px;
  transition:.1s;
  border-radius:10px;
  svg{
    width:20px;
    margin-right:3px;
  }
  &:hover{
    background:#5E5959;
    transform:translateY(-53%) scale(1.02);
  }
`;