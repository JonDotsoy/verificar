import React from 'react';
import Vehiclestructure, { GalleryComp } from "../../../libs/components/common/vehicle-panel/vehiclestructure";

export default () => <Vehiclestructure>
  <div x-sec="title">MG 360 JF7H20</div>
  <div x-sec="detail">
    <div className="row-data"><div className="label">Vehículo</div><div className="value">MG 360</div></div>
    <div className="row-data"><div className="label">Patente</div><div className="value">JFH%12</div></div>
    <div className="row-data"><div className="label">Color</div><div className="value">Rojo</div></div>
    <div className="row-data"><div className="label">Dueño</div><div className="value">Salvador Reyes</div></div>
    <div className="row-data row-data-textarea">
      <div className="label">Descripción de daño</div>
      <div className="value">Choque frontal ......................</div>
    </div>
  </div>
  <div x-sec="gallery">
    <GalleryComp label="Partes Dañadas">
      <img src="http://2.bp.blogspot.com/-uhmYS2q92ng/Unvvbwg9-0I/AAAAAAAAAJE/M5wodYPJ3qo/s1600/AUTO.png" />
    </GalleryComp>
  </div>
  <div x-sec="gallery">
    <GalleryComp label="Sinisetro">
      <img src="https://loremflickr.com/320/240/car?lock=17"></img>
      <img src="https://loremflickr.com/320/240/car?lock=18"></img>
      <img src="https://loremflickr.com/320/240/car?lock=19"></img>
      <img src="https://loremflickr.com/320/240/car?lock=20"></img>
      <img src="https://loremflickr.com/320/240/car?lock=21"></img>
      <img src="https://loremflickr.com/320/240/car?lock=22"></img>
    </GalleryComp>
  </div>
</Vehiclestructure>
