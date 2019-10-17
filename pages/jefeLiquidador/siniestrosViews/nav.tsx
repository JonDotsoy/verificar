import React, { useEffect } from "react";
import styled from "styled-components";

import SiniestroIcon from "../../../libs/components/icons/AlertHandDrawnSymbol.component";
import TrabajoIcon from "../../../libs/components/icons/CustomerSupport.component";
import UserIcon from "../../../libs/components/icons/BaselineFace24px.component";
import PolizaIcon from "../../../libs/components/icons/Insurance.component";
import VehiculoIcon from "../../../libs/components/icons/CarOfHatchback.component";
import TallerIcon from "../../../libs/components/icons/Carmechanic89096.component";
import PresupuestoIcon from "../../../libs/components/icons/FoldedNewspaper.component";
import MultimediaIcon from "../../../libs/components/icons/Gallery.component";

interface PropsComp {
    handleSection(sectionName: string): any;
}


export default ({ handleSection }: PropsComp) => {

    useEffect(() => {
        initBorder();
        toggleStylesBtns();
    }, []);

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
                    <a onClick={() => handleSection(item.txt)} className="link" key={index}>
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
   margin:0 auto 15px auto;
   max-width:800px;
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
        icon: <UserIcon />,
        txt: "liquidador",

    },
    {
        icon: <PolizaIcon />,
        txt: "poliza",

    },
    {
        icon: <SiniestroIcon />,
        txt: "siniestro",

    },
    {
        icon: <VehiculoIcon />,
        txt: "vehículos",

    },
    {
        icon: <TrabajoIcon />,
        txt: "trabajos",

    },
    {
        icon: <TallerIcon />,
        txt: "taller",

    },
    {
        icon: <PresupuestoIcon />,
        txt: "presupuesto",

    },
    {
        icon: <MultimediaIcon />,
        txt: "multimedia",

    }
]