import React from "react";
import styled from "styled-components";
import CarIcon from "../../../../libs/components/icons/CarOfHatchback.component";
import DespachadoIcon from "../../../../libs/components/icons/BaselineTimeline.compoent";
import DropdownOptions from "../../../../libs/components/dropdownOptions";



export default () => {

  return (
    <MainContainer>
      <ItemsHeader>
        <div className="items_titles">
          {
            itemsTitle.map((item, index) =>
              <div key={index} className="items_title">
                <h4>{item}</h4>
              </div>
            )
          }
         

        </div>
        <div className="dpd_container">
            <DropdownOptions options={options} handleSelect={() => null} />
          </div>
      </ItemsHeader>
      <Items>
        <div className="items_container">
          <div className="items_info">
            {
              items.map((item, index) =>
                <div key={index} className="items">
                  <div className="item id">
                    <a href="/liquidador/siniestros/presupuesto">{item.id}</a>
                  </div>

                  <div className="item cliente">
                    {item.cliente}
                  </div>
                  <div className="item marca">
                    <div className="icon">
                      <CarIcon />
                    </div>
                    <div className="nameMarca">
                      {item.marca}
                    </div>
                  </div>
                  <div className="item placa">
                    {item.placa}
                  </div>
                  <div className="item estado">
                    <div className="icon">
                      <DespachadoIcon />
                    </div>
                    <div className="nameEstado">
                      {item.estado}
                    </div>

                  </div>
                </div>
              )
            }
          </div>
        </div>
      </Items>
    </MainContainer>
  )
}

const Items = styled.div`
   min-width:775px;
   overflow-x:auto;
   
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
  
  
 }
  .items{
  transition:all .3s;
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  padding:1rem 0;
  border-bottom:1px solid rgba(0,0,0,.3);
  letter-spacing:1px;

   .item{
    height:60px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }
  .id{
    font-weight:bold;
    color:#EB780E;
    font-size:20px;
    a {
      color:#EB780E;
      text-decoration:none;
    }
  }
  .liquidador{
    color:#EB780E;
    font-size:20px;
    text-transform:capitalize;
    font-weight:600;
  
    transition:.3s;
   
    .name_container{
      height:100%;
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
    }
    .icon{
      width:30px;
      svg{
        width:100%;
        fill:#EB780E;
      }
    }
    button{
      outline: none;
      text-transform:capitalize;
      display:block;
      border:none;
      cursor:pointer;
      background:#EB780E;
      color:white;
      transition:all .2s;
    
      opacity:.8;
      font-size:0.7em;
      padding:0.5em 1em;
      border-radius:5px;
      letter-spacing:0.03em;
      &:hover{
        opacity:1;
      }
    }
  }
  .cliente{
    color:rgba(235,120,14,.9);
    font-size:20px;
    text-transform:capitalize;

  }
  .marca{
    font-size:18px;
    color:rgba(0,0,0,.7);
    text-transform:uppercase;
    .icon{
      transform:scale(1.4) scaleX(-1);
      svg{
        width:100%;
        fill:#EB780E;
      }
    }
  }
  .placa{
    font-size:18px;
    color:rgba(0,0,0,.7);
    text-transform:uppercase;
  }
  .estado{
    color:rgba(235,120,14,.9);
    text-transform:uppercase;
    font-size:18px;
    .icon{
      width:30px;
      svg{
        width:100%;
        fill:#EB780E;
      }
    }
  }
 }
`;

const MainContainer = styled.div`
  width:100%;
  overflow:hidden;
`;
const ItemsHeader = styled.div`
min-width:775px;
  background:#CBCBC9;
  padding:10px 1rem;
  position:relative;
.items_titles{
  
  max-width:1200px;
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  text-transform:uppercase;
  font-weight:bold;
  color:rgba(0,0,0,.6);
}
.dpd_container{
  position:absolute;
  right:15px;
  top:-3px;
}
 .items_title{
  text-align:center;
}
 .items_title:nth-child(2){
    border-left:2px solid rgba(0,0,0,.6);
    border-right:2px solid rgba(0,0,0,.6);
}
 .items_title:nth-child(4){
  border-left:2px solid rgba(0,0,0,.6);
  border-right:2px solid rgba(0,0,0,.6);
}
.items_title:nth-child(6){
    border-left:2px solid rgba(0,0,0,.6);
    
  }
`;
const itemsTitle = [
  "id",
  "cliente",
  "marca",
  "placa",
  "estado"
]

const items = [
  {
    id: 329,
    cliente: "jose araneda",
    marca: "kia sportage",
    placa: "hj234577",
    estado: "despachado"
  },
  {
    id: 331,
    cliente: "manuel solis",
    marca: "toyota yaris",
    placa: "tg234577",
    estado: "denunciado"
  },
  {
    id: 331,
    cliente: "manuel solis",
    marca: "toyota yaris",
    placa: "tg234577",
    estado: "liquidación"
  },
  {
    id: 331,
    cliente: "manuel solis",
    marca: "toyota yaris",
    placa: "tg234577",
    estado: "reparado"
  },
  {
    id: 329,
    cliente: "jose araneda",
    marca: "kia sportage",
    placa: "hj234577",
    estado: "despachado"
  },
  {
    id: 331,
    cliente: "manuel solis",
    marca: "toyota yaris",
    placa: "tg234577",
    estado: "denunciado"
  },
  {
    id: 331,
    cliente: "manuel solis",
    marca: "toyota yaris",
    placa: "tg234577",
    estado: "liquidación"
  },
  {
    id: 331,
    cliente: "manuel solis",
    marca: "toyota yaris",
    placa: "tg234577",
    estado: "reparado"
  }
]

const options = [
  "denunciado",
  "ingresado al taller",
  "liquidación de daños",
  "presupuesto revisado",
  "en reparacion",
  "reparado",
  "despachado"
];
