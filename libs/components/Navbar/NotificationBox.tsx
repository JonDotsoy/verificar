import React from 'react';
import styled from 'styled-components';

const ItemWithImmg = styled.div`
  display: flex;
  align-items: center;
  margin-left: -20px;
  .icon-img {
    display: inline-block;
    width: 91px;
    height: 40px;
    background-position: center;
    background-size: auto 164%;
  }
  .value-text {
    flex: 1;
  }
  .value-result {
    font-size: 1.4rem;
    text-align: right;
  }
`;

export const NotificationBox = () => <div className="notification-box">
  <div className="item-content header">
    <div className="text">
      Notificaciones
    </div>
    <button>ver todos</button>
  </div>

  <div className="list-detail">
    <div className="item-content">
      <ItemWithImmg className="text">
        <span className="icon-img" style={{ backgroundImage: 'url("/static/icono_notificaciones_-_1.png")' }} />
        <div className="value-text">Nuevo presupuesto:</div>
        <span className="value-result">4</span>
      </ItemWithImmg>
    </div>
    <div className="item-content">
      <ItemWithImmg className="text">
        <span className="icon-img" style={{ backgroundImage: 'url("/static/icono_notificaciones_-_2.png")' }} />
        <div className="value-text">Sinistros Asignados:</div>
        <span className="value-result">20</span>
      </ItemWithImmg>
    </div>
    <div className="item-content">
      <ItemWithImmg className="text">
        <span className="icon-img" style={{ backgroundImage: 'url("/static/icono_notificaciones_-_3.png")' }} />
        <div className="value-text">Presupuesto sin revisar:</div>
        <span className="value-result">2</span>
      </ItemWithImmg>
    </div>
    <div className="item-content">
      <ItemWithImmg className="text">
        <span className="icon-img" style={{ backgroundImage: 'url("/static/icono_notificaciones_-_auto.png")' }} />
        <div className="value-text">Vehiculo:</div>
        <span className="value-result">VG3456 - Despachado</span>
      </ItemWithImmg>
    </div>
  </div>
</div>;
