import React from "react";
import styled from "styled-components";

interface PropsTypes {
    children?: any;
    title?: string;
}


export default ({ title,children }: PropsTypes) => {
    return (
        <Header>
            {
                title ?
                    <h2 className="title">{title}</h2>
                    :
                    null
            }
            { children }
        </Header>
    )
}




const Header = styled.div`
  background:#EB780E;
  color:rgba(255,255,255,.7);
  padding:2rem 1rem 3rem 1rem;
   .title{
    text-transform:uppercase;
    text-align:center;
    font-size:25px;
  }
`;