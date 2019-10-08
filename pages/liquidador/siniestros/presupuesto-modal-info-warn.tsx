import React from 'react';
import Modal from '../../../libs/components/modal';
import styled from 'styled-components';
import Btn from '../../../libs/components/Btn';

const B = styled.div({
  backgroundColor: 'rgb(152,151,149)',
  padding: 20,
  borderRadius: 10,
  color: 'white',
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridGap: 20,
  '.b-title': {
    'h1': {
      display: 'inline-block',
      padding: '4px 10px',
      backgroundColor: 'rgb(182, 173, 166)',
      borderRadius: 4,
    }
  },
  '.b-control-btns': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default ({ onSave = () => { } }) => <>
  <Modal backgroundColor='transparent'>
    <B>
      <div className="b-title">
        <h1>Comentario:</h1>
      </div>
      <div className="b-comment">
        <p>Presupuesto Ok. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet corrupti quaerat in deserunt voluptatem nulla quae, accusamus consequatur vero explicabo quasi pariatur nostrum atque a reprehenderit qui iure doloribus.</p>
      </div>
      <div className="b-control-btns">
        <Btn type="button" onClick={() => onSave()}>Guardar y Salir</Btn>
      </div>
    </B>
  </Modal>
</>;
