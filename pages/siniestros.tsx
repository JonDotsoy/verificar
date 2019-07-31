import React from 'react';
import styled from "styled-components";
import NavBarComponent from '../components/Navbar/NavBar.component';
import ContainerComponent from '../components/Container';
import Head from 'next/head';
import ResetCSS from "../components/ResetCSS";
import MenuNavComponent from "../components/MenuLateral/ContainerMenuLateral.component";
import ContainerBody from '../components/ContainerBody';
import SinisterDetailComponent from '../components/panels/SinisterDetail.component';

export default () => {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:600&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: ResetCSS }}></style>
    </Head>

    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <ContainerBody>

        <SinisterDetailComponent
          sinisterId={'ID234'}
        />

      </ContainerBody>

    </ContainerComponent>
  </>;
}
