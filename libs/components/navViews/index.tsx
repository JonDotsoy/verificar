import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { useRouter } from "next/router";

interface PropsComp {
    classCss?: string;
    data: any;
}

export default ({ classCss, data }: PropsComp) => {

    const LiquidadoresNav = styled.div`
    ${css}
    ${classCss}
    `;
    const router = useRouter();
    const styleActive = (href: String) => {
        return {
            border: router.pathname === href ? "3px solid black" : ""
        }
    }
    return (
        <LiquidadoresNav>
            {
                data ?
                    data.map((item:any, index:number) =>
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
                    :
                    null
            }
        </LiquidadoresNav>
    )
}

const css = `
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