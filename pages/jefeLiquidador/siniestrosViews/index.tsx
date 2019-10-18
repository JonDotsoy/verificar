import React from "react";
import styled from "styled-components";
import List from "./list";


export default () => {



  return (
    
          <BoxMain>
            <List  />
          </BoxMain>
 
  )
}


const BoxMain = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
`;

const ContainerViews = styled.div`
  width:80%;
  margin: 25px auto;
  @media (max-width: 768px) {
    width:100%;
  }
`;