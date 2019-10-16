import React from "react";
import styled from "styled-components";


export default () => {
    return (
         <Left>
              <h3 className="title">perfil liquidador</h3>
                <div className="avatar">
                    <img src={info.avatar} alt={info.name} />
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
                            Pptp. <br/>
                            sin revisar
                        </div>
                    </div>
                    <div className="info">
                        <div className="number">
                            {info.pEnReparacion}
                        </div>
                        <div className="name cuatro">
                            Pptp. <br/>
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
    overflow:hidden;
    border-radius:50%;
    border:5px solid white;
    width:180px;
    margin:10px auto 0 auto;
    filter: grayscale(100%);
    transition:.3s;
    img{
        display:block;
        width:100%;
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

const info = {
    name: "juan jose araneda",
    avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
    sCerrados: 125,
    sActuales: 50,
    pSinRevisar: 5,
    pEnReparacion: 44
}