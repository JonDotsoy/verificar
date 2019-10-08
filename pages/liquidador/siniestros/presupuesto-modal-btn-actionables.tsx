import React from 'react';
import Presupuesto from './presupuesto';
import Modal from '../../../libs/components/modal';
import ArrowBackComponent from '../../../libs/components/icons/ArrowBack.component';

export default ({ onBack = () => { }, onClick = () => { } } = {}) => <>
  <Modal>
    <div className="title" onClick={() => onBack()}>
      <ArrowBackComponent className="icon" />
      <h1>Volver</h1>
    </div>
    <div className="control-btns">
      <button type="button" onClick={() => onClick()} className="bg-orange">Aprobar</button>
      <button type="button" onClick={() => onClick()} className="bg-orange-light">Aprobar parcialmente</button>
      <button type="button" onClick={() => onClick()} className="bg-red">rechazar</button>
    </div>
  </Modal>
</>;
