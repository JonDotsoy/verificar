import React from "react";
import styled from "styled-components";

export default () => {
    return (
        <MainContainer>
            <ItemsHeader>
                <div className="t_items_titles">
                    {
                        itemsTitle.map((item, index) =>
                            <div key={index} className="t_items_title">
                                <h4>{item}</h4>
                            </div>
                        )
                    }
                </div>
            </ItemsHeader>
            <Items>
                <div className="t_items_container">
                    <div className="t_items_info">
                        {
                            itemsPresupuesto.map((item, index) =>
                                <div key={index} className="t_items">
                                    <div className="t_item id">
                                        {item.id}
                                    </div>
                                    <div className="t_item cliente">
                                        {item.cliente}
                                    </div>
                                    <div className="t_item marca">
                                        {item.marca}
                                    </div>
                                    <div className="t_item placa">
                                        {item.placa}
                                    </div>
                                    <div className="t_item estado">
                                        {item.estado}
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
  .t_items{
  transition:all .3s;
  cursor:pointer;
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  padding:1rem 0;
  border-bottom:1px solid rgba(0,0,0,.3);
  letter-spacing:1px;
  &:hover{
    background:rgba(0,0,0,.05);
  }
   .t_item{
    height:50px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }
  .id{
    font-weight:bold;
    color:#EB780E;
    font-size:20px;
  }
  .cliente{
    color:rgba(235,120,14,.9);
    font-size:20px;
    text-transform:capitalize;
    font-weight:600;
  }
  .estado{
    color:rgba(235,120,14,.9);
    font-size:18px;
    text-transform:uppercase;
  }
  .marca,.placa{
    font-size:18px;
    color:rgba(0,0,0,.7);
    text-transform:uppercase;
  }
  
 }
`;

const MainContainer = styled.div`
  width:100%;
  overflow:hidden;
`;
const ItemsHeader = styled.div`
min-width:775px;
overflow-x:auto;
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
const itemsTitle = [
    "id",
    "cliente",
    "marca",
    "placa",
    "estado"
]

const itemsPresupuesto = [
    {
        id: 329,
        cliente: "josé araneda",
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
        cliente: "josé araneda",
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