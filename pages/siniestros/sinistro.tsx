import React from 'react';
import Vehiclestructure, { GalleryComp } from "../../components/common/vehicle-panel/vehiclestructure";

export default () => <Vehiclestructure>
  <div x-sec="title">Siniestro JF7H20</div>
  <div x-sec="detail">
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

  <div x-sec="gallery">
    <GalleryComp label="Siniestro">
      <img src="http://2.bp.blogspot.com/-uhmYS2q92ng/Unvvbwg9-0I/AAAAAAAAAJE/M5wodYPJ3qo/s1600/AUTO.png" />
    </GalleryComp>
  </div>
  <div x-sec="gallery">
    <GalleryComp label="Inspección">
      <img src="https://previews.123rf.com/images/sergio_ksv/sergio_ksv0709/sergio_ksv070900021/1647910-el-coche-destrozado-frente-de-auto-da%C3%B1ado-.jpg"></img>
      <img src="https://st3.depositphotos.com/3936111/18795/i/1600/depositphotos_187951130-stock-photo-damaged-car.jpg"></img>
      <img src="https://i.ebayimg.com/00/s/NDAwWDc0MA==/z/qykAAOSw~y9ZCdr2/$_86.JPG"></img>
    </GalleryComp>
  </div>
</Vehiclestructure>
