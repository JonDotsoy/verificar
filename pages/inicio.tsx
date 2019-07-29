import React from 'react';
import NavBarComponent from '../components/Navbar/NavBar.component';
import ContainerComponent from '../components/Container';
import Head from 'next/head';
import ResetCSS from "../components/ResetCSS";
import MenuNavComponent from "../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import IconfinderSedan285810Component from '../components/icons/IconfinderSedan285810.component';

const Content = styled.div`
  flex: 1;
  display: block;
`;

const Box = styled.div`
  margin: 20px auto;
  max-width: 800px;
`

export default () => {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:600&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: ResetCSS }}></style>
    </Head>

    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>

      <Content>
        <Box>
          <IconfinderSedan285810Component p={75}/>
          <IconfinderSedan285810Component p={50}/>
          <IconfinderSedan285810Component p={0}/>
        </Box>
      </Content>

    </ContainerComponent>
  </>;
}
