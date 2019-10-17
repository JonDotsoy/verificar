import React, { useEffect } from "react";
import styled from "styled-components";

import WarningIcon from "../../../libs/components/icons/AlertHandDrawnSymbol.component";
import PresuIcon from "../../../libs/components/icons/FoldedNewspaper.component";
import UserIcon from "../../../libs/components/icons/BaselineFace24px.component";

export default ({
    showListLiquidadores = () => { },
    showPresupuestoLiquidador = () => { },
    showSiniestroLiquidador = () => { }
}) => {
    
    useEffect(() => {
        initBorder();
        toggleStylesBtns();
    }, []);

    const conditionRender = (section: string) => {
        switch (section) {
            case links[0].txt:
                return showListLiquidadores()
            case links[1].txt:
                return showSiniestroLiquidador()
            case links[2].txt:
                return showPresupuestoLiquidador()
            default:
                return null;
        }
    }


    const toggleStylesBtns = () => {
        const links = document.getElementsByClassName("link");
        const removeBorder = () => {
            for (let i = 0; i < links.length; i++) {
                const link: any = links[i];
                link.style.border = "none";
            }
        }
        for (let i = 0; i < links.length; i++) {
            const link: any = links[i];
            link.addEventListener("click", () => {
                removeBorder();
                link.style.border = "3px solid black";
            });
        }
    }
    const initBorder = () => {
        const link:any = document.getElementsByClassName("link")[0];
        link.style.border = "3px solid black";
    }
    return (
        <LiquidadoresNav>
            {
                links.map((item, index) =>
                    <a className="link" key={index} onClick={() => conditionRender(item.txt)}>
                        <div className="link_icon">
                            {item.icon}
                        </div>
                        <span>
                            {item.txt}
                        </span>
                    </a>
                )
            }
        </LiquidadoresNav>
    )
}

const LiquidadoresNav = styled.div`
   margin:10px auto 15px auto;
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
        cursor:pointer;
        box-sizing:border-box;
    }
    .link_icon{
        svg{
            fill:white;
        }
    }
`;

const links = [
    {
        url: "#!",
        icon: <UserIcon />,
        txt: "liquidador",

    },
    {
        url: "#!",
        icon: <WarningIcon />,
        txt: "siniestro",

    },
    {
        url: "#!",
        icon: <PresuIcon />,
        txt: "presupuesto",

    }
]