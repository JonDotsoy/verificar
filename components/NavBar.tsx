import OutlineSearch from './icons/OutlineSearch';
import OutlineNotifications from './icons/OutlineNotifications';
import OutlineSettings from './icons/OutlineSettings';
import Avatar from './Avatar';
import BaselineExpandMore from './icons/BaselineExpandMore';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
`;

const NavBarSectionLeft = styled.div`
  flex: 1;
`;

const NavBarSectionRigth = styled.div`
  display: flex;
`;

const ContainerNavBar = styled.div`
  background: linear-gradient(to left, #746e6e, #979694);
`;

const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: inline-block;
  padding: 0px 14px;
`;

const ItemName = styled.div`
  display: flex;
  align-self: center;
`;

const ContentAvatar = styled.div`
  display: inline-block;
  align-self: center;
  padding: 0px 25px;
`;

const NameItem = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:600&display=swap');
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
  font-size: 27px;
  width: 200px;
  text-align: center;
  align-self: center;
`;

interface PropsNavBar { }

const defaultPorps: PropsNavBar = {}

export default (props: PropsNavBar = defaultPorps) => {
  return <ContainerNavBar>
    <NavBar>
      <NavBarSectionLeft>
        <img src="static/logo.png" alt="" />
      </NavBarSectionLeft>
      <NavBarSectionRigth>
        <NavigationMenu>
          <Item>
            <OutlineSearch></OutlineSearch>
          </Item>
          <Item>
            <OutlineNotifications></OutlineNotifications>
          </Item>
          <Item>
            <OutlineSettings></OutlineSettings>
          </Item>
        </NavigationMenu>
        <ItemName>
          <NameItem>Juan Gerente</NameItem>
          <BaselineExpandMore></BaselineExpandMore>
        </ItemName>
        <ContentAvatar>
          <Avatar></Avatar>
        </ContentAvatar>
      </NavBarSectionRigth>
    </NavBar>
  </ContainerNavBar>
}