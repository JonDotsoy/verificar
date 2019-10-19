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
