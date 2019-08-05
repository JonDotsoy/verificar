import React from 'react';
import styled from "styled-components";
import NavBarComponent from '../components/Navbar/NavBar.component';
import ContainerComponent from '../components/Container';
import Head from 'next/head';
import ResetCSS from "../components/ResetCSS";
import MenuNavComponent from "../components/MenuLateral/ContainerMenuLateral.component";

export default () => {
  return <>
    <Head>
      <ResetCSS />
    </Head>

    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>
    </ContainerComponent>
  </>;
}
