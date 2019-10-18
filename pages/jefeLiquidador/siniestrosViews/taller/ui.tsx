import React from "react";

import styled from "styled-components";
import DuenoIcon from "../../../../libs/components/icons/BaselineFace24px.component";
import PhoneIcon from "../../../../libs/components/icons/BaselineStayPrimaryPortrait24px.component";
import EmailIcon from "../../../../libs/components/icons/BaselineMail.component";
import DirectionIcon from "../../../../libs/components/icons/BaselineLocationOn.component";
import CityIcon from "../../../../libs/components/icons/BaselineLocationCity.component";
import CarIcon from "../../../../libs/components/icons/CarOfHatchback.component";
import PresuAtrasado from "../../../../libs/components/icons/FoldedNewspaper.component";


export default () => {
    return (
        <TallerContainer>
            <TallerName>
                <h2>{tallerInfo.name}</h2>
            </TallerName>
            <TallerInfo>
                <TallerLeft>
                    <div className="taller_photo">
                        <img src={tallerInfo.photoTaller} alt={tallerInfo.name} />
                    </div>
                    <ul className="taller_items">
                        {
                            tallerInfo.tallerItems.map((item, index) =>
                                <li className="taller_item" key={index}>
                                    <div className="taller_info_icon">
                                        {item.icon}
                                    </div>
                                    <div className="taller_info_key">
                                        {item.key}:
                                </div>
                                    <div className="taller_info_val">
                                        {item.val}
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </TallerLeft>
                <TallerRight>
                    <h3 className="title">{infoOperativa.title}</h3>
                    <ul className="ope_items">
                        {
                            infoOperativa.items.map((item, index) =>
                                <li className="ope_item" key={index}>
                                    <div className="ope_item_top">
                                        <div className="ope_icon">
                                            {item.icon}
                                        </div>
                                        <div className="ope_number">
                                            {item.number}
                                        </div>
                                    </div>
                                    <div className="ope_name">
                                        {item.name}
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </TallerRight>
            </TallerInfo>
        </TallerContainer>
    )
}

const TallerRight = styled.div`
    width:45%;
    overflow:hidden;
    
    @media (max-width: 1000px) {
        width:100%;
    }
   
    .title{
        background:#e5c300;
        color:white;
        text-align:center;
        text-transform:uppercase;
        font-size:25px;
        padding:1rem;
    }
    .ope_item{
        border-bottom:1px solid rgba(0,0,0,.5);
        padding:0 0 1.8rem 0;
    }
    .ope_item_top{
        display:flex;
        justify-content:center;
        height:120px;
        align-items:center;
    }
    .ope_icon{
        width:70px;
        svg{
            transform:scale(3);
            fill:black;
        }
    }
    .ope_item:last-child .ope_icon{
        width:60px;
        svg{
            transform:scale(2.5);
        }
    }
    .ope_number{
        background:#eb780e;
        color:white;
        padding: 10px 2rem;
        border-radius:5px;
        font-size:16px;
        font-weight:bold;
    }
    .ope_item:nth-child(2) .ope_number,
    .ope_item:nth-child(3) .ope_number{
        background:red;
    }
    .ope_name{
        text-align:center;
        color:#eb780e;
        text-transform:uppercase;
        font-size:20px;
        font-weight:bold;
    }
`;

const TallerLeft = styled.div`
    width:55%;
    overflow:hidden;
    background:#b1b0ae;
    @media (max-width: 1000px) {
        width:100%;
    }
   
    .taller_photo{
        width:100%;
        max-height:300px;
        overflow:hidden;
        img{
            height:auto;
            width:100%;
            display:block; 
        }
    }
    .taller_items{
        padding:1rem;
    }
    .taller_item{
        width:95%;
        margin:0 auto;
        display:flex;
        height:60px;
        align-items:center;
        position:relative;
        &:before{
            content:"";
            position:absolute;
            height:1px;
            width:90%;
            bottom:1px;
            left:50%;
            background:rgba(255,255,255,.5);
            transform:translateX(-50%);
        }
    }
    .taller_info_icon{
        width:8%;
        svg{
            width:30px;
            fill:black;
        }
    }
    .taller_info_key{
        width:20%;
        color:#eb780e;
        text-transform:capitalize;
        font-size:20px;
        font-weight:bold;
    }
   .taller_info_val{
      width:72%;
      text-transform:uppercase;
      font-weight:bold;
      font-size:20px;
      color:rgba(0,0,0,.6);
   }
`;

const TallerInfo = styled.div`
   margin:20px 0 0 0;
   display:flex;
   flex-wrap:wrap;
`;
const TallerName = styled.div`
  background:#eb780e;
  border-radius:20px;
  max-width:500px;
  margin:0 auto;
  padding:10px 5px;
  & h2{
      text-align:center;
      color:white;
      text-transform:uppercase;
      font-size:25px;
  }
`;
const TallerContainer = styled.div`
  width:80%;
  margin: 25px auto;
  @media (max-width: 768px) {
    width:100%;
  }
`;

const tallerInfo = {
    name: "taller pro tuerca",
    photoTaller: "https://i.ibb.co/1RtQjDB/taller.jpg",
    tallerItems: [
        {
            icon: <DuenoIcon />,
            key: "dueño",
            val: "alfredo fuentes"
        },
        {
            icon: <PhoneIcon />,
            key: "télefono",
            val: "+ 56 8 43221121"
        },
        {
            icon: <EmailIcon />,
            key: "e-mail",
            val: "a.fuentes@protuerca.cl"
        },
        {
            icon: <DirectionIcon />,
            key: "direccón",
            val: "francisco bilbao #2870"
        },
        {
            icon: <CityIcon />,
            key: "ciudad",
            val: "santiago"
        }
    ]
}

const infoOperativa = {
    title: "información operativa",
    items: [
        {
            icon: <CarIcon />,
            name: "vehiculos ingresados",
            number: 10
        },
        {
            icon: <CarIcon />,
            name: "vehiculos atrasados",
            number: 2
        },
        {
            icon: <PresuAtrasado />,
            name: "presupuestos atrasados",
            number: 4
        }
    ]
}