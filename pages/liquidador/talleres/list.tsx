import React from 'react';
import styled from "styled-components";

import SearchIcon from "../../../libs/components/icons/BaselineSearch.component";
import CarIcon from "../../../libs/components/icons/CarOfHatchback.component";
import WarningIcon from "../../../libs//components/icons/AlertHandDrawnSymbol.component";

export default ({ goDetails = () => { } }) => {
  return (
    <TalleresContainer>
      <TalleresHeader>
        <h2 className="talleres_title">listado de talleres</h2>

        <InputSearch >
          <input className="talleres_input_form" name="search_taller" type="text" placeholder="BUSCAR POR" />
          <div className="talleres_search_icon">
            <SearchIcon />
          </div>
        </InputSearch >

      </TalleresHeader>
      <TalleresItems>
        <ItemsHeader>
          <div className="t_items_titles">
            {
              tItemsTitle.map((item, index) =>
                <div key={index} className="t_items_title">
                  <h4>{item}</h4>
                </div>
              )
            }
          </div>
        </ItemsHeader>
        <div className="t_items_container">
          <div className="t_items_info">
          {
            tItemsTaller.map((taller, index) =>
              <div onClick={() => goDetails()} key={index} className="t_items_taller">
                <div className="t_item_taller">
                  <h3 className="taller_name">{taller.taller}</h3>
                </div>
                <div className="t_item_taller">
                  <span className="taller_estado">
                    {taller.estadoOperativo}
                  </span>

                </div>
                <div className="t_item_taller">
                  <div className="taller_car_icon">
                    <CarIcon />
                  </div>

                  {taller.ingresados}
                </div>
                <div className="t_item_taller">
                  <div className="taller_warning_icon">
                    <WarningIcon />
                  </div>

                  {taller.atrasados}
                </div>
                <div className="t_item_taller">
                  <span className="taller_entrega">
                    {taller.tiempoEntrega} dias
                </span>

                </div>
              </div>
            )
          }


        </div>
        </div>
      </TalleresItems>

    </TalleresContainer>
  )
}


const TalleresContainer = styled.div`
  width:80%;
  margin: 25px auto;
`;

const ItemsHeader = styled.div`
  background:#CBCBC9;
  padding:5px 1rem;
.t_items_titles{
    
  max-width:950px;
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  text-transform:uppercase;
  font-weight:bold;
  color:rgba(0,0,0,.6);
}
 .t_items_title{
  
  text-align:center;
}
 .t_items_title:nth-child(2){
    border-left:2px solid rgba(0,0,0,.6);
    border-right:2px solid rgba(0,0,0,.6);
}
 .t_items_title:nth-child(4){
  border-left:2px solid rgba(0,0,0,.6);
  border-right:2px solid rgba(0,0,0,.6);
}
`;


const TalleresItems = styled.div`
   min-width:775px;
   overflow-x:auto;

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
   max-width:950px;
   padding:20px 0;
  
 }
  .t_items_taller{
  transition:all .3s;
  cursor:pointer;
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  padding:1rem 0;
  border-bottom:1px solid rgba(0,0,0,.3);
  &:hover{
    background:rgba(0,0,0,.05);
  }
   .t_item_taller{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }
   .taller_name{
    text-transform:uppercase;
    font-weight:bold;
    color:#EB780E;
    font-size:20px;
  }
   .taller_estado{
    color:#EB780E;
    font-size:20px;
  }
   .taller_car_icon{
    transform: scaleX(-1);
     & svg{
       fill: #EB780E;
       transform:scale(1.6);
     }
  }
   .taller_warning_icon{
    & svg{
      fill: #EB780E;
      
    }
  }
   .taller_entrega{
    color:rgba(0,0,0,.7);
    text-transform:uppercase;
    font-size:18px;
    font-weight:bold;
  }
 }
`;

const TalleresHeader = styled.div`
  background:#EB780E;
  color:rgba(255,255,255,.7);
  padding:2rem 1rem 3rem 1rem;
   .talleres_title{
    text-transform:uppercase;
    text-align:center;
    font-size:25px;
  }
`;
const InputSearch = styled.div`
    margin:30px auto 0 auto;
    max-width:400px;
    background:rgba(255,255,255,.3);
    padding:12px 20px;
    border-radius:20px;
    position:relative;
    .talleres_input_form{
        height: 100%;
        border:none;
        background:transparent;
        width:85%;
        font-size:16px;
        font-weight:bold;
        color:rgba(255,255,255,.8);
        text-transform:uppercase;
        &:focus{
          outline: none;
        }
      }
     .talleres_input_form::placeholder{
        color:rgba(255,255,255,.7);
    }
    .talleres_search_icon{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:10px;
     }
`;


const tItemsTitle = [
  "taller",
  "estado operativo",
  "ingresados",
  "atrasados",
  "tiempo de entrega"
]

const tItemsTaller = [
  {
    taller: "pro tuerca",
    estadoOperativo: "80%",
    ingresados: 100,
    atrasados: 5,
    tiempoEntrega: 5
  },
  {
    taller: "chok2",
    estadoOperativo: "65%",
    ingresados: 45,
    atrasados: 22,
    tiempoEntrega: 10
  },
  {
    taller: "cars",
    estadoOperativo: "45%",
    ingresados: 22,
    atrasados: 13,
    tiempoEntrega: 18
  },
  {
    taller: "pro tuerca",
    estadoOperativo: "80%",
    ingresados: 100,
    atrasados: 5,
    tiempoEntrega: 5
  },
  {
    taller: "chok2",
    estadoOperativo: "65%",
    ingresados: 45,
    atrasados: 22,
    tiempoEntrega: 10
  },
  {
    taller: "cars",
    estadoOperativo: "45%",
    ingresados: 22,
    atrasados: 13,
    tiempoEntrega: 18
  }
]