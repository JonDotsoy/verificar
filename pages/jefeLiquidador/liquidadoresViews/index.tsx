import React from "react";
import styled from "styled-components";

import ListLiquidadores from "./list";


export default () => {
    return (
                    <BoxMain>
                        <ListLiquidadores />
                    </BoxMain>
                  
    )
}

const BoxMain = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
`;