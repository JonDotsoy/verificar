import React from 'react';
import Vehiclestructure from "../../components/common/vehicle-panel/vehiclestructure";

export default () => <Vehiclestructure>
  <div id="title">Siniestro JF7H20</div>
  <div id="detail">
    <div className="row-data"><div className="label">ID</div><div className="value">32154152</div></div>
    <div className="row-data"><div className="label">Fecha</div><div className="value">22/07/2019</div></div>
    <div className="row-data"><div className="label">Aseguradora</div><div className="value">HDI SEGUROS</div></div>
    <div className="row-data"><div className="label">Asegurado</div><div className="value">Salvador Reyes</div></div>
    <div className="row-data"><div className="label">Seguro</div><div className="value">BNN 22</div></div>
    <div className="row-data"><div className="label">DD Póliza</div><div className="value">HN42314213D</div></div>
    <div className="row-data"><div className="label">Vehículo</div><div className="value">MG 360</div></div>
    <div className="row-data"><div className="label">Patente</div><div className="value">JFH%12</div></div>
    <div className="row-data row-data-textarea">
      <div className="label">Descripción de daño</div>
      <div className="value">Choque frontal ......................</div>
    </div>
  </div>
</Vehiclestructure>
