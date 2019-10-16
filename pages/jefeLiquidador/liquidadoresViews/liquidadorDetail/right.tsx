import React from "react";
import styled from "styled-components";
import BackIcon from "../../../../libs/components/icons/ArrowBack.component";
import NextIcon from "../../../../libs/components/icons/ArrowBack.component";
import EmailIcon from "../../../../libs/components/icons/BaselineMail.component";
import PhoneIcon from "../../../../libs/components/icons/BaselineStayPrimaryPortrait24px.component";
import RelojIcon from "../../../../libs/components/icons/Icons8Velocimetro.component";
import MuyBuenoIcon from "../../../../libs/components/icons/BaselineFace24px.component";

export default () => {
    const handleIconSatisfaccion = (text:string) => {
        switch (text) {
            case "Muy bueno":
               return <MuyBuenoIcon />
            default:
                return ""
        }
    }
    return (
        <Right>
            <div className="title">
                <div className="icon"><BackIcon /></div>
                <h2>{info.name}</h2>
                <div className="icon next"><NextIcon /></div>
            </div>
            <ul className="contact">
                <li className="fila">
                    <div className="icon"><EmailIcon /></div>
                    <div className="tipo">correo:</div>
                    <div className="valor">{info.correo}</div>
                </li>
                <li className="fila">
                    <div className="icon"><PhoneIcon /></div>
                    <div className="tipo">teléfono:</div>
                    <div className="valor">{info.telefono}</div>
                </li>
            </ul>
            <ul className="tiempo_p">
                <li className="title">
                    Tiempo promedio por presupuestos:
                </li>
                <li className="dia">
                    <div className="valor">
                        {info.tiempoPPrp} Días
                    </div>
                    <div className="icon">
                        <RelojIcon />
                    </div>
                </li>
                <li className="dia">
                    <div className="valor">
                        {info.satisfaccion}
                    </div>
                    <div className="icon">
                     { handleIconSatisfaccion(info.satisfaccion)}
                    </div>
                </li>
            </ul>
        </Right>
    )
}
const Right = styled.div`
    box-sizing: border-box;
    width:50%;
    text-align:center;
    padding:1rem 1.5rem;
    @media(max-width:750px){
        width:100%;
     }
    .tiempo_p{
        margin-top:50px;
        .title{
            display:flex;
            justify-content:center;
            font-size:25px;
            padding-bottom:1rem;
        }
        .dia{
            border-top:1px solid rgba(0,0,0,.2);
            display:flex;
            align-items:center;
            justify-content:center;
            height:70px;
            .valor{
                background:#eb780e;
                color:white;
                padding:10px 30px;
                border-radius:30px;
                font-size:20px;
       
            }
            .icon{
                svg{
                    fill:black;
                }
            }
        }
    }
    .contact{
        border-bottom:1px solid rgba(0,0,0,.2);
        margin:30px 0 0 0;
        .fila{
            border-top:1px solid rgba(0,0,0,.2);
            display:flex;
            align-items:center;
            height:60px;
            .icon{
                width:10%;
                svg{
                    width:30px;
                    fill:black;
                }
            }
            .tipo{
                width:25%;
                text-align:left;
                text-transform:capitalize;
                font-size:20px;
                color:#CB6000;
            }
            .valor{
                width:65%;
                text-align:left;
                font-size:20px;
            }
        }
    }
    .title{
        align-items:center;
        display:flex;
        justify-content:space-between;
        height:40px;
        h2{
           
            font-size:25px;   
            text-transform:uppercase;
            font-weight:700;
        }
        .icon{
            border:1px solid black;
            border-radius:50%;
            width:25px;
            height:25px;
            align-items:center;
            justify-content:center;
            display:flex;
            cursor:pointer;
            transition:.3s;
            svg{
                width:25px;
                fill:black; 
            }
            &:hover{
                 border-color:#CB6000;
                 width:30px;
                 height:30px;
            }
        }
        .next{
            svg{
               transform:rotate(180deg);
            }
        }
    }
`;


const info = {
    name: "juan jose araneda",
    correo: "juanjose.a@seguros.cl",
    telefono: "56 9 9740999",
    tiempoPPrp: 5,
    satisfaccion: "Muy bueno"
}