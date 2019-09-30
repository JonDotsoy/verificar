import React from 'react';
import Presupuesto from './presupuesto';
import Modal from '../../../components/modal';

export default () => <>
  <Presupuesto></Presupuesto>
  <Modal>
    <div className="title">
      <h1>Comentarios</h1>
    </div>
    <div className="comment">
      <p>Presupuesto Ok. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet corrupti quaerat in deserunt voluptatem nulla quae, accusamus consequatur vero explicabo quasi pariatur nostrum atque a reprehenderit qui iure doloribus.</p>
    </div>
    <div className="control-btns">
      <button type="button">Guardar y Salir</button>
    </div>
  </Modal>
</>;
