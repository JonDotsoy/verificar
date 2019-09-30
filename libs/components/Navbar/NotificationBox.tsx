import React from 'react';

export const NotificationBox = () => <div className="notification-box">
  <div className="item-content header">
    <div className="text">
      Notificaciones: 4
    </div>
    <button>ver todos</button>
  </div>

  <div className="list-detail">
    <div className="item-content">
      <div className="text">Nuevo presupuesto: 4</div>
    </div>
    <div className="item-content">
      <div className="text">Sinistros Asignados: 20</div>
    </div>
    <div className="item-content">
      <div className="text">Presupuesto sin revisar: 2</div>
    </div>
    <div className="item-content">
      <div className="text">Vehiculo: VG3456 - Despachado</div>
    </div>
  </div>
</div>;
