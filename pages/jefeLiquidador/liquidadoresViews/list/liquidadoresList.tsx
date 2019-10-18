import React from "react";
import styled from "styled-components";
import Router from 'next/router';

export default () => {
  const goPerfilLiquidador = () => {
    Router.push('/jefeLiquidador/liquidadoresViews/liquidadorDetail');
  }
  return (
    <LiquidadoresList>
      <div className="t_items_header">
        <div className="t_items_titles">
          {
            lItemsTitle.map((item, index) =>
              <div key={index} className="t_items_title">
                <h4>{item}</h4>
              </div>
            )
          }
        </div>
      </div>
      <div className="t_items_container">
        <div className="t_items_info">
          {
            lItems.map((item, index) =>
              <div key={index} onClick={()=>goPerfilLiquidador()}  className="t_items_taller">
                <div className="t_item_taller">
                  <div className="item_avatar">
                    <img className="item_avatar" src={item.avatar} alt={item.liquidador} />
                  </div>
                </div>
                <div className="t_item_taller">
                  <h3 className="taller_name">{item.liquidador}</h3>
                </div>
                <div className="t_item_taller taller_estado">

                  {item.email}


                </div>
                <div className="t_item_taller phone">
                  +{item.phone}
                </div>
                <div className="t_item_taller siniestros">

                  {item.siniestros}
                </div>
                <div className="t_item_taller tipo">

                  {item.tipo}


                </div>
              </div>
            )
          }


        </div>
      </div>
    </LiquidadoresList>
  )
}

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



const LiquidadoresList = styled.div`
min-width:775px;
overflow-x:auto;
   .t_items_header{
    background:#CBCBC9;
    padding:5px 1rem;
  }
   .t_items_titles{
    max-width:1100px;
    margin:0 auto;
    display:grid;
    grid-template-columns:repeat(6, 1fr);
    text-transform:uppercase;
    font-weight:bold;
    color:rgba(0,0,0,.6);
  }
  .t_items_title{
    
    text-align:center;
  }
  .t_items_title:nth-child(3){
      border-left:2px solid rgba(0,0,0,.6);
      border-right:2px solid rgba(0,0,0,.6);
  }
  .t_items_title:nth-child(5){
    border-left:2px solid rgba(0,0,0,.6);
    border-right:2px solid rgba(0,0,0,.6);
 }
 .t_items_container{
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
 .t_items_info{
   margin:0 auto;
   max-width:1100px;
   padding:20px 0;
   
 }
 .t_items_taller{
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
  .t_item_taller{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }
  .taller_name{
    text-transform:capitalize;
    color:#EB780E;
    font-size:20px;
  }
  .taller_estado{
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