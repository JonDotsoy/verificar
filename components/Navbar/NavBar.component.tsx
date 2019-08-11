import React from 'react';
import OutlineSearch from '../icons/OutlineSearch.component';
import OutlineNotifications from '../icons/OutlineNotifications.component';
import OutlineSettings from '../icons/OutlineSettings.component';
import Avatar from './Avatar.component';
import styled from 'styled-components';
import NameProfileComponent from './NameProfile.component';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
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
  return <Background>
    <Container>
      <SectionLeft>
        <img src="/static/logo.png" alt="verificar" />
      </SectionLeft>
      <SectionRigth>

        <ItemMenu>
          <OutlineSearch></OutlineSearch>
        </ItemMenu>
        <ItemMenu>
          <OutlineNotifications></OutlineNotifications>
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
