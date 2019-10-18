import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { useRouter } from "next/router";
import SiniestroIcon from "../../../libs/components/icons/AlertHandDrawnSymbol.component";
import TrabajoIcon from "../../../libs/components/icons/CustomerSupport.component";
import UserIcon from "../../../libs/components/icons/BaselineFace24px.component";
import PolizaIcon from "../../../libs/components/icons/Insurance.component";
import VehiculoIcon from "../../../libs/components/icons/CarOfHatchback.component";
import TallerIcon from "../../../libs/components/icons/Carmechanic89096.component";
import PresupuestoIcon from "../../../libs/components/icons/FoldedNewspaper.component";
import MultimediaIcon from "../../../libs/components/icons/Gallery.component";


export default () => {
    const router = useRouter();
    const styleActive = (href:String) => {
        return {
            border: router.pathname === href ? "3px solid black" : ""
        }
    }
    return (
        <LiquidadoresNav>
            {
                links.map((item, index) =>
                    <Link key={index} href={item.url}>
                        <a className="link" style={styleActive(item.url)}>
                            <div className="link_icon">
                                {item.icon}
                            </div>
                            <span>
                                {item.txt}
                            </span>
                        </a>
                    </Link>
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
        url: "/jefeLiquidador/siniestrosViews/perfilLiquidador",
        icon: <UserIcon />,
        txt: "liquidador",

    },
    {
        url: "",
        icon: <PolizaIcon />,
        txt: "poliza",

    },
    {
        url: "/jefeLiquidador/siniestrosViews/siniestro",
        icon: <SiniestroIcon />,
        txt: "siniestro",

    },
    {
        url: "",
        icon: <VehiculoIcon />,
        txt: "vehículos",

    },
    {
        url: "",
        icon: <TrabajoIcon />,
        txt: "trabajos",

    },
    {
        url: "/jefeLiquidador/siniestrosViews/taller",
        icon: <TallerIcon />,
        txt: "taller",

    },
    {
        url: "",
        icon: <PresupuestoIcon />,
        txt: "presupuesto",

    },
    {
        url: "",
        icon: <MultimediaIcon />,
        txt: "multimedia",

    }
]