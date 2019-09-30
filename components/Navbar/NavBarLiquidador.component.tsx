import React, { useState } from 'react';
import OutlineSearch from '../icons/OutlineSearch.component';
import OutlineNotifications from '../icons/OutlineNotifications.component';
import OutlineSettings from '../icons/OutlineSettings.component';
import Avatar from './Avatar.component';
import styled from 'styled-components';
import NameProfileComponent from './NameProfile.component';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  .notification-content {
    z-index: 100;
    position: relative;
    border: none;
    background: none;
    padding: 0px;
    margin: 0px;

    .notification-btn {
      border: none;
      padding: 0px;
      margin: 0px;
      background: none;
    }

    .notification-indicator {
      position: absolute;
      top: 0px;
      right: 0px;
      background: rgb(253, 254, 0);
      font-family: "Source Sans Pro", sans-serif;
      width: 20px;
      height: 20px;
      font-size: 14px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .notification-box {
    border-radius: 10px;
    position: absolute;
    width: 400px;
    background-color: rgb(254, 140, 9);
    right: -100px;
    top: 60px;
    box-shadow: 0px 3px 3px 0px #00000040;

    .list-detail {
      padding: 0px 20px;

      .item-content:last-child {
        border: none;
      }
    }

    .item-content {
      padding: 10px 20px;
      color: white;
      font-size: 14px;

      display: flex;
      border-bottom: solid 1px white;

      .text {
        flex: 1;
      }

      button {
        
      }
    }

    .header {
      background-color: rgb(208, 113, 1);
      border-radius: 10px;

      .text {
        text-transform: uppercase;
      }

      button {
        border: none;
        padding: 0px;
        padding: 0px;
        background: none;
        color: white;
        font-size: 14px;
      }
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 0px;
      height: 0px;
      top: -20px;
      right: 105px;
      border-top: solid 0px transparent;
      border-left: solid 15px transparent;
      border-right: solid 15px transparent;
      border-bottom: solid 20px rgb(208, 113, 1);
    }
  }
`;

const SectionLeft = styled.div`
  padding: 5px 70px;
`;

const SectionRigth = styled.div`
  padding-right: 40px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  & > * {
    margin: 0px 7px;
  }
`;

const Background = styled.div`
  background: linear-gradient(to left, #746e6e, #979694);
`;

const ItemMenu = styled.div`
  display: inline-block;
`;

export default () => {
  const [menuNotificationVisible, setMenuNotificationVisible] = useState(false);
  const [countNotification, setCountNotification] = useState(8 as null | number);

  function toggleMenuNotifications() {
    setMenuNotificationVisible(e => !e);
  }

  return <Background>
    <Container>
      <SectionLeft>
        <img src="/static/logo.png" alt="verificar" />
      </SectionLeft>
      <SectionRigth>

        <ItemMenu>
          <Link href="/siniestros/search">
            <a>
              <OutlineSearch></OutlineSearch>
            </a>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <div className="notification-content">
            <button className="notification-btn" onClick={toggleMenuNotifications}>
              <OutlineNotifications></OutlineNotifications>
              {countNotification && <div className="notification-indicator"><span>{countNotification}</span></div>}
            </button>

            {menuNotificationVisible &&
              <div className="notification-box">
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
              </div>
            }
          </div>
        </ItemMenu>
        <ItemMenu>
          <OutlineSettings></OutlineSettings>
        </ItemMenu>

        <NameProfileComponent></NameProfileComponent>

        <Avatar avatarUri="https://i.pravatar.cc/300?u=1" />
        <Avatar avatarUri="https://icon-library.net/images/smile-icon/smile-icon-6.jpg" />

      </SectionRigth>
    </Container>
  </Background>
}
