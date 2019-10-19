import React from "react";
import styled from "styled-components";
import EditIcon from "../icons/BaselineBuild.component";

interface PropsComp {
    info:any;
}


export default ({info}:PropsComp) => {
    return (
        <Left>
            <h3 className="title">perfil liquidador</h3>
            <div className="avatar">
                <div className="box">
                    <img src={info.avatar} alt={info.name} />
                </div>

                <div className="edit">
                    <EditIcon />
                </div>
            </div>
            <div className="info_container">
                <div className="info">
                    <div className="number">
                        {info.sCerrados}
                    </div>
                    <div className="name uno">
                        Siniestros cerrados
                        </div>
                </div>
                <div className="info">
                    <div className="number">
                        {info.sActuales}
                    </div>
                    <div className="name dos">
                        Siniestros actuales
                        </div>
                </div>
                <div className="info">
                    <div className="number">
                        {info.pSinRevisar}
                    </div>
                    <div className="name tres">
                        Pptp. <br />
                        sin revisar
                        </div>
                </div>
                <div className="info">
                    <div className="number">
                        {info.pEnReparacion}
                    </div>
                    <div className="name cuatro">
                        Pptp. <br />
                        en reparación
                        </div>
                </div>
            </div>
        </Left>
    )
}

const Left = styled.div`
box-sizing: border-box;
padding:1rem 1rem 3rem 1rem;
text-align:center;
color:white;
width:50%;
background:#CB6000;
@media(max-width:750px){
    width:100%;
 }
.title{
    font-size:20px;   
    text-transform:uppercase; 
}
.avatar{
    width:180px;
    margin:10px auto 0 auto;
    filter: grayscale(100%);
    transition:.3s;
    position:relative;
    .box{
        border:5px solid white;
        width:100%;
        overflow:hidden;
        border-radius:50%;
    }
    img{
        display:block;
        width:100%;
    }
    .edit{
        position:absolute;
        z-index:1;
        bottom:5px;
        right:-5px;
        overflow:hidden;
        border-radius:50%;
        width:20px;
        height:20px;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        border:1px solid white;
        transition:all linear .3s;
        opacity:.8;
        &:hover{
            opacity:1; 
            transform:scale(1.1);
        }
        svg{
            width:15px;
        }
    }
}
.info_container{
    margin:25px auto 0 auto;
    width:265px;
    display:flex;
    flex-wrap:wrap;
    .info{
        margin-top:15px;
        width:50%;
        .number{
            font-size:25px;
        }
        .name{
            margin:0 auto;
            width:125px;
            border-radius:30px;
            padding:10px 0;
            font-weight:lighter;
        }
       .uno{background:#FF7900;}
       .dos{background:#D8C602;}                
        .tres{background:#DA0404;}
        .cuatro{background:#FFA200;}
    }
 
}

`;
