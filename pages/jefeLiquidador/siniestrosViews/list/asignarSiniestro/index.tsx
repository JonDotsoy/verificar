import React from "react";
import styled from "styled-components";
import SearchIcon from "../../../../../libs/components/icons/BaselineSearch.component";
import Router from 'next/router';
import LayoutViews from "../../../../../libs/components/layoutViews";

export default () => {
    const addLiquidador = () => {
        Router.push('/jefeLiquidador/siniestros');
    }
    return (
        <LayoutViews user="jefe">
            <DirectionCenter>
                <Header>
                    <h2 className="title">asignar siniestro {siniestroName} a:</h2>
                    <InputSearch >
                        <input className="input_form" name="search" type="text" placeholder="BUSCAR liquidador" />
                        <div className="search_icon">
                            <SearchIcon />
                        </div>
                    </InputSearch >
                </Header>
                <LiquidadoresList>
                    <div className="items_header">
                        <div className="items_titles">
                            {
                                lItemsTitle.map((item, index) =>
                                    <div key={index} className="items_title">
                                        <h4>{item}</h4>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="items_container">
                        <div className="items_info">
                            {
                                lItems.map((item, index) =>
                                    <div onClick={() => addLiquidador()} key={index} className="items">
                                        <div className="item">
                                            <div className="item_avatar">
                                                <img className="item_avatar" src={item.avatar} alt={item.liquidador} />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <h3 className="name">{item.liquidador}</h3>
                                        </div>
                                        <div className="item email">
                                            {item.email}
                                        </div>
                                        <div className="item phone">
                                            +{item.phone}
                                        </div>
                                        <div className="item siniestros">

                                            {item.siniestros}
                                        </div>
                                        <div className="item tipo">
                                            {item.tipo}
                                        </div>
                                    </div>
                                )
                            }


                        </div>
                    </div>
                </LiquidadoresList>
            </DirectionCenter>
        </LayoutViews>
    )
}
const DirectionCenter = styled.div`
    width:90%;
    margin:25px auto;
    @media(max-width:780px){
      width:100%;
    }
`;

const LiquidadoresList = styled.div`
min-width:775px;
overflow-x:auto;
   .items_header{
    background:#FE8C07;
    padding:5px 1rem;
  }
   .items_titles{
    max-width:1200px;
    margin:0 auto;
    display:grid;
    grid-template-columns:repeat(6, 1fr);
    text-transform:uppercase;
    padding:1rem 0 0 0;
    color:rgba(0,0,0,.6);
    height:25px;
    overflow:hidden;
  }
  .items_title{
    height:20px; 
    text-align:center;
    font-weight:800;
  }
  .items_title:nth-child(3){
      border-left:2px solid rgba(0,0,0,.6);
      border-right:2px solid rgba(0,0,0,.6);
  }
  .items_title:nth-child(5){
    border-left:2px solid rgba(0,0,0,.6);
    border-right:2px solid rgba(0,0,0,.6);
 }
 .items_container{
  width:100%;
  overflow-y:auto;
  max-height:500px;
  /* width */
   ::-webkit-scrollbar {
     width: 13px;
   }

   /* Track */
   ::-webkit-scrollbar-track {
     background: #cfd8dd; 
   }
   
   /* Handle */
   ::-webkit-scrollbar-thumb {
     background: #05b6d4; 
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
     background: #06d1f4; 
   }
}
 .items_info{
   margin:0 auto;
   max-width:1200px;
   padding:20px 0;
   
 }
 .items{
  transition:all .3s;
  cursor:pointer;
  display:grid;
  grid-template-columns:repeat(6, 1fr);
  padding:1rem 0;
  border-bottom:1px solid rgba(0,0,0,.3);
  &:hover{
    background:rgba(0,0,0,.05);
    .item_avatar img{
        filter: grayscale(0);
    }
  }
  .item{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }
  .name{
    text-transform:capitalize;
    color:#EB780E;
    font-size:20px;
  }
  .email{
    color:rgba(0,0,0,.6);
    font-size:18px;
  }
  

  .item_avatar{
      width:80px;
      overflow:hidden;
      border-radius:50%;
      img{
        width:100%;
        display:block;
        filter: grayscale(100%);
        transition:all .3s;
      }
  }
  .phone{
    color:rgba(0,0,0,.6);
    font-size:18px;
  }
  .siniestros{
    color:#EB780E;
    font-size:25px;
    font-weight:bold;
  }
  .tipo{
    font-size:20px;
    color:#EB780E;
    text-transform:capitalize;
  }
 }
`;

const Header = styled.div`
  background:#726E6F;
  color:rgba(255,255,255,.9);
  padding:3rem 1rem 4rem 1rem;
   .title{
    text-transform:uppercase;
    text-align:center;
    font-size:25px;
    letter-spacing:0.05rem;
  }
`;

const InputSearch = styled.div`
    margin:30px auto 0 auto;
    max-width:500px;
    background:#FDA454;
    padding:12px 20px;
    border-radius:20px;
    position:relative;
    .input_form{
        text-align:left;
        height: 100%;
        border:none;
        background:transparent;
        width:100%;
        font-size:18px;
        font-weight:bold;
        color:rgba(255,255,255,.8);
        text-transform:uppercase;
        &:focus{
          outline: none;
        }
        
      }
     .input_form::placeholder{
        color:rgba(255,255,255,.5);
    }
    .search_icon{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:10px;
     }
`;

const siniestroName = "xvh20";

const lItemsTitle = [
    "",
    "liquidador",
    "e-mail",
    "teléfono",
    "siniestros",
    "tipo"
]

const lItems = [
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "josé araneda",
        email: "jaraneda@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 45,
        tipo: "interno"
    },
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "mauel solis",
        email: "manuelsolis@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 34,
        tipo: "oficial"
    },
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "rodrigo mejias",
        email: "rmejias@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 22,
        tipo: "oficial"
    },
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "victor rebolledo",
        email: "vrebolledo@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 11,
        tipo: "interno"
    },
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "josé araneda",
        email: "jaraneda@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 45,
        tipo: "interno"
    },
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "mauel solis",
        email: "manuelsolis@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 34,
        tipo: "oficial"
    },
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "rodrigo mejias",
        email: "rmejias@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 22,
        tipo: "oficial"
    },
    {
        avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
        liquidador: "victor rebolledo",
        email: "vrebolledo@gmail.com",
        phone: "56 9 4545 2345",
        siniestros: 11,
        tipo: "interno"
    }
]