import React, { useState } from 'react';
import OutlineSearch from '../icons/OutlineSearch.component';
import OutlineNotifications from '../icons/OutlineNotifications.component';
import OutlineSettings from '../icons/OutlineSettings.component';
import Avatar from './Avatar.component';
import NameProfileComponent from './NameProfile.component';
import Link from 'next/link';
import { NotificationBox } from './NotificationBox';
import {
  Container,
  SectionLeft,
  SectionRigth,
  Background,
  ItemMenu,
} from './navBarStyles';

export default () => {
  const [menuNotificationVisible, setMenuNotificationVisible] = useState(false);
  const [countNotification] = useState(7 as null | number);

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
          <Link href="/liquidador/siniestros/search">
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

            {menuNotificationVisible && <NotificationBox></NotificationBox>}
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
