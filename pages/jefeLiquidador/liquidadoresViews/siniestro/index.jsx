import React from "react";
import styled from "styled-components";
import List from "./list";
import InputS from "../../../../libs/components/inputSearch";

export default () => {
  return (
    <>
      
      <InputS
        stylesContainer={{ background: "#EB780E" }}
        placeholder={"buscar siniestro"}
        stylesInput={{ textAlign: "center" }}
      />
      <TitleList>
        <h2 className="title">Siniestros Asociados</h2>
      </TitleList>
      <List />
    </>
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