import React from 'react';
import Vehiclestructure from "../../components/common/vehicle-panel/vehiclestructure";

export default () => <Vehiclestructure>
  <div id="title">MG 360 JF7H20</div>
  <div id="detail">
    <div className="row-data"><div className="label">Vehículo</div><div className="value">MG 360</div></div>
    <div className="row-data"><div className="label">Patente</div><div className="value">JFH%12</div></div>
    <div className="row-data"><div className="label">Color</div><div className="value">Rojo</div></div>
    <div className="row-data"><div className="label">Dueño</div><div className="value">Salvador Reyes</div></div>
    <div className="row-data row-data-textarea">
      <div className="label">Descripción de daño</div>
      <div className="value">Choque frontal ......................</div>
    </div>
  </div>
</Vehiclestructure>
