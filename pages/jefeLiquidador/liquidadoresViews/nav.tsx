import React from "react";
import Link from 'next/link';
import {useRouter} from "next/router";
import styled from "styled-components";
import WarningIcon from "../../../libs/components/icons/AlertHandDrawnSymbol.component";
import PresuIcon from "../../../libs/components/icons/FoldedNewspaper.component";
import UserIcon from "../../../libs/components/icons/BaselineFace24px.component";

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
        url: "/jefeLiquidador/liquidadoresViews/liquidadorDetail",
        icon: <UserIcon />,
        txt: "liquidador",

    },
    {
        url: "/jefeLiquidador/liquidadoresViews/siniestro",
        icon: <WarningIcon />,
        txt: "siniestro",

    },
    {
        url: "/jefeLiquidador/liquidadoresViews/presupuestos",
        icon: <PresuIcon />,
        txt: "presupuesto",

    }
]