import React from 'react';
import OutlineSearch from '../icons/OutlineSearch.component';
import OutlineNotifications from '../icons/OutlineNotifications.component';
import OutlineSettings from '../icons/OutlineSettings.component';
import Avatar from './Avatar.component';
import BaselineExpandMore from '../icons/BaselineExpandMore.component';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const SectionLeft = styled.div`
  padding: 5px 70px;
`;

const SectionRigth = styled.div`
  display: inline-flex;
  margin-left: 20px;

  & > * {
    align-self: center;
  }
`;

const Background = styled.div`
  background: linear-gradient(to left, #746e6e, #979694);
`;

const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
`;

const ItemMenu = styled.div`
  display: inline-block;
  padding: 0px 14px;
`;

const ItemMenuName = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`;

const ContainerAvatar = styled.div`
  display: inline-block;
  align-self: center;
  padding: 0px 25px;
`;

const NameProfile = styled.div`
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
  font-size: 27px;
  width: 150px;
  text-align: center;
  align-self: center;
`;

interface PropsNavBar { }

const defaultPorps: PropsNavBar = {}

export default (props: PropsNavBar = defaultPorps) => {
  return <Background>
    <Container>
      <SectionLeft>
        <img src="static/logo.png" alt="verificar" />
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

        <NameProfile>Juan Gerente</NameProfile>
        <BaselineExpandMore></BaselineExpandMore>

        <Avatar />

      </SectionRigth>
    </Container>
  </Background>
}
