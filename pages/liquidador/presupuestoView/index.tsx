import React from "react";
import Router from 'next/router';
import styled from "styled-components";
import CarIcon from "../../../libs/components/icons/CarOfHatchback.component";
import PriceIcon from "../../../libs/components/icons/BaselineMonetizationOn.component";
import InputS from "../../../libs/components/inputSearch";
import ViewHeaderBox from "../../../libs/components/viewHeaderBox";




export default () => {
  const goPresupuesto = () => {
    Router.push('/liquidador/presupuestoView/presupuesto');
  }
  return (
    <PContainer>
      <ViewHeaderBox title="presupuestos asignados">
        <InputS />
      </ViewHeaderBox>
      <PItems>
        <div className="t_items_header">
          <div className="t_items_titles">
            {
              tItemsTitle.map((item, index) =>
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
              tItemsPresupuesto.map((item, index) =>
                <div onClick={() => goPresupuesto()} key={index} className="t_items">
                  <div className="t_item">
                    <h3 className="taller_name light_font">{item.id}</h3>
                  </div>
                  <div className="t_item">
                    <span className="taller_entrega">
                      {item.fecha}
                    </span>
                  </div>
                  <div className="t_item">
                    <h3 className="taller_name">{item.taller}</h3>
                  </div>
                  <div className="t_item">
                    <div className="taller_car_icon">
                      <CarIcon />
                    </div>
                    <span className="taller_entrega light_font">
                      {item.vehiculo}
                    </span>

                  </div>
                  <div className="t_item">
                    <span className="taller_entrega">
                      {item.deducible}
                    </span>
                  </div>
                  <div className="t_item">
                    <div className="taller_warning_icon">
                      <PriceIcon />
                    </div>
                    <span className="item_monto">
                      {item.monto}
                    </span>
                  </div>
                  <div className="t_item taller_entrega">

                    {item.estado}

                  </div>
                </div>
              )
            }


          </div>
        </div>
      </PItems>

    </PContainer>


  )
}


const PContainer = styled.div`
  width:95%;
  margin: 25px auto;
  @media(max-width:750px){
    width:100%;
}
`;

const PItems = styled.div`
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
    grid-template-columns:repeat(7, 1fr);
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
  .t_items_title:nth-child(6){
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
  .t_items{
  transition:all .3s;
  display:grid;
  grid-template-columns:repeat(7, 1fr);
  padding:1rem 0;
  border-bottom:1px solid rgba(0,0,0,.3);
  cursor:pointer;
  &:hover{
    background:rgba(0,0,0,.05);
  }
   .t_item{
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
      transform:scale(0.6);
    }
  }
   .taller_entrega{
    color:rgba(0,0,0,.7);
    text-transform:uppercase;
    font-size:18px;
    font-weight:bold;
    text-align:center;
  }
   .item_monto{
      font-size:20px;
  }
  .light_font{
    font-weight:200;
  }
 }
`;



const tItemsTitle = [
  "id",
  "fecha",
  "taller",
  "vehículo",
  "deducible",
  "monto",
  "estado"
]

const tItemsPresupuesto = [
  {
    id: 444,
    fecha: "17/05/2019",
    taller: "pro tuerca",
    vehiculo: "mg 360",
    deducible: "$100.000",
    monto: "$400.00",
    estado: "aprobado"
  },
  {
    id: 345,
    fecha: "11/05/2019",
    taller: "wheels",
    vehiculo: "toyota hilux",
    deducible: "$300.000",
    monto: "$450.00",
    estado: "aprobado parcialmente"
  },
  {
    id: 576,
    fecha: "9/05/2019",
    taller: "chok2",
    vehiculo: "kia sportagle",
    deducible: "$150.000",
    monto: "$200.00",
    estado: "rechazado"
  },
  {
    id: 456,
    fecha: "2/05/2019",
    taller: "cars",
    vehiculo: "chevrolet sail",
    deducible: "$90.000",
    monto: "$150.00",
    estado: "aprobado parcialmente"
  },
  {
    id: 444,
    fecha: "17/05/2019",
    taller: "pro tuerca",
    vehiculo: "mg 360",
    deducible: "$100.000",
    monto: "$400.00",
    estado: "aprobado"
  },
  {
    id: 345,
    fecha: "11/05/2019",
    taller: "wheels",
    vehiculo: "toyota hilux",
    deducible: "$300.000",
    monto: "$450.00",
    estado: "aprobado parcialmente"
  },
  {
    id: 576,
    fecha: "9/05/2019",
    taller: "chok2",
    vehiculo: "kia sportagle",
    deducible: "$150.000",
    monto: "$200.00",
    estado: "rechazado"
  },
  {
    id: 456,
    fecha: "2/05/2019",
    taller: "cars",
    vehiculo: "chevrolet sail",
    deducible: "$90.000",
    monto: "$150.00",
    estado: "aprobado parcialmente"
  }
]
