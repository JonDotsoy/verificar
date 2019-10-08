import React from "react";
import styled from "styled-components";

import WarningIcon from "../../../libs/components/icons/AlertHandDrawnSymbol.component";
import TallerIcon from "../../../libs/components/icons/Carmechanic89096.component";
import PresuIcon from "../../../libs/components/icons/FoldedNewspaper.component";

export default () => {
    return (
        <TallerNav>
            {
                links.map((item,index)=>
                    <a className="link" href={item.url} key={index}>
                        <div className="link_icon">
                            {item.icon}
                        </div>
                        <span>
                            { item.txt }
                        </span>   
                    </a>
                )
            }
        </TallerNav>
    )
}

const TallerNav = styled.div`
   margin:15px auto;
   max-width:350px;
   display:flex;
   justify-content:space-between;
    .link{
        display:flex;
        flex-direction:column;
        background:#eb780e;
        text-decoration:none;
        justify-content:center;
        align-items:center;
        width:90px;
        height:80px;
        color:white;
        text-transform:uppercase;
        font-weight:bold;
        font-size:12px;
        border-radius:10px;
    }
    .link_icon{
        svg{
            fill:white;
        }
    }
`;

const links = [
    {
        url:"#!",
        icon:<WarningIcon />,
        txt:"siniestro"
    },
    {
        url:"#!",
        icon:<TallerIcon />,
        txt:"taller"
    },
    {
        url:"#!",
        icon:<PresuIcon />,
        txt:"presupuesto"
    }
]