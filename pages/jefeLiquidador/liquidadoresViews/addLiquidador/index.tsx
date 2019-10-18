import React from "react";
import Router from 'next/router';
import styled from "styled-components";
import LayoutViews from "../../../../libs/components/layoutViews";
import NameIcon from "../../../../libs/components/icons/BaselineFace24px.component";
import EmailIcon from "../../../../libs/components/icons/BaselineMail.component";
import PhoneIcon from "../../../../libs/components/icons/BaselineStayPrimaryPortrait24px.component";
import DirectionIcon from "../../../../libs/components/icons/BaselineLocationOn.component";



export default () => {
    return (
        <LayoutViews user="jefe">
            <AddLContainer>
                <AddLTitle>
                    <h2>Agregar liquidador</h2>
                </AddLTitle>
                <AddLBody>
                    <form className="form">
                        <div className="form_group">
                            <div className="input_icon">
                                <NameIcon />
                            </div>
                            <div className="form_input">
                                <input type="text" placeholder="nombre" required />
                            </div>
                        </div>
                        <div className="form_group">
                            <div className="input_icon">
                                <EmailIcon />
                            </div>
                            <div className="form_input">
                                <input type="email" placeholder="e-mail" required />
                            </div>
                        </div>
                        <div className="form_group">
                            <div className="input_icon">
                                <PhoneIcon />
                            </div>
                            <div className="form_input">
                                <input type="tel" placeholder="celular" required />
                            </div>
                        </div>
                        <div className="form_group">
                            <div className="input_icon">
                                <DirectionIcon />
                            </div>
                            <div className="form_input">
                                <input type="tel" placeholder="domicilio" required />
                            </div>
                        </div>
                        <div className="btns_in_ex">
                            <button type="button">
                                <img className="icon" src="https://i.ibb.co/2PYkvfv/parado.png" alt="interno" />
                                interno
                        </button>
                            <button type="button">
                                <img className="icon" src="https://i.ibb.co/nR8cNSt/run.png" alt="externo" />
                                externo
                        </button>
                        </div>
                        <div className="btns_bot">
                            <button type="submit">
                                enviar
                        </button>
                            <button onClick={()=>Router.back()} type="button">
                                cancelar
                        </button>
                        </div>
                    </form>
                </AddLBody>
            </AddLContainer>
        </LayoutViews>
    )
}


const AddLBody = styled.div`
    background:#777674;
    position:relative;
    min-height:400px;
    border-radius:10px;
    padding:1rem 1rem 2rem 1rem;
    @media(max-width:750px){
        border-radius:0;
     }
    .form{
        margin:0 auto;
        max-width:80%;
        @media(max-width:750px){
            max-width:100%;
        }
    }
    .form_group{
        display:flex;
        flex-wrap:nowrap;
        height:50px;
        align-items:center;
        margin-top:25px;
    }
    .input_icon{
        width:10%;
    }
    .form_input{
        width:90%;
        overflow:hidden;
        border-radius:20px;
        height:100%;
        input{
            width:100%;
            outline:none;
            background:rgba(255,255,255,.5);
            color:white;
            border:none;
            height:100%;
            font-size:18px;
            padding:0 1rem;
            text-transform:uppercase;
            font-weight:bold;
            letter-spacing:0.05rem;
            ::placeholder{
                color:rgba(255,255,255,.75);
            }
        }
    }
    .btns_in_ex{
        margin:0 auto;
        width:80%;
        display:flex;
        justify-content:space-between;
        padding:40px 0 0 0;
        button{
            cursor:pointer;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#4D4C4A;
            outline:none;
            border:none;
            color:white;
            width:170px;
            height:60px;
            font-weight:800;
            text-transform:uppercase;
            font-size:11px;
            letter-spacing:0.04rem;
            transition:all .3s;
            &:hover{
                background:#EB780E;
            }
        }
        .icon{
            width:15px;
            margin-right:10px;
        }
    }
    .btns_bot{
        margin:0 auto;
        padding:35px 0 0 0;
        display:flex;
        width:250px;
        overflow:hidden;
        button{
            width:50%;
            height:50px;
            display:flex;
            align-items:center;
            justify-content:center;
            outline:none;
            border:none;
            cursor:pointer;
            color:white;
            text-transform:uppercase;
            font-size:13px;
            font-weight:600;
            background:rgba(255,255,255,.4);
            transition:all .3s;
            &:hover{
                background:rgba(255,255,255,.3);
            }
        }
        button:nth-child(1){
            background:#EB780E;
            &:hover{
                background:#FB8211;
            }
        }
    }
`;
const AddLContainer = styled.div`
  width:700px;
  position:relative;
  margin: 80px auto 25px auto;
  @media (max-width: 750px) {
    width:100%;
    margin-top:30px;
  }
`;

const AddLTitle = styled.div`
    position:absolute;
    top:-60px;
    left:0;
    height:70px;
    background:#EB780E;
    font-size:25px;
    color:white;
    overflow:hidden;
    width:70%;
    border-radius:35px;
    padding:1.3rem 1rem 1rem 30px;
    h2{
        text-transform:uppercase;
    }
    @media(max-width:750px){
       position:inherit;
       top:0;
       height:auto;
       width:100%;
       border-radius:0;
    }
`;
