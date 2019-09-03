import React from 'react';
import Presupuesto from './presupuesto';
import Modal from '../../components/modal';
import styled from 'styled-components';
import ArrowBackComponent from '../../components/icons/ArrowBack.component';

const Content = styled.div`
`;

export default () => <>
  <Presupuesto></Presupuesto>
  <Modal>
    <div className="title">
      <ArrowBackComponent className="icon" />
      <h1>Volver</h1>
    </div>
    <div className="control-btns">
      <button type="button" className="bg-orange">Aprobar</button>
      <button type="button" className="bg-orange-light">Aprobar parcialmente</button>
      <button type="button" className="bg-red">rechazar</button>
    </div>
  </Modal>
</>;
