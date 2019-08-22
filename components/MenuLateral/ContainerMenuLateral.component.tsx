import React from 'react';
import styled from "styled-components";
import ItemMenuComponent from "./ItemMenu.component";
import BaselineTimelineCompoent from '../icons/BaselineTimeline.compoent';
import BaselineTrending from '../icons/BaselineTrending.component';
import BaselineBuild from '../icons/BaselineBuild.component';
import BaselineMonetizationOn from '../icons/BaselineMonetizationOn.component';
import Icons8VelocimetroComponent from '../icons/Icons8Velocimetro.component';
import BaselineMenuComponent from '../icons/BaselineMenu.component';

const Container = styled.div`
  background-color: black;
  display: inline-block;
  min-width: 260px;
  padding: 0px 0px;
  min-height: calc( 100vh - 100px );
`;

export default () =>
  <Container>
    <ItemMenuComponent Icon={BaselineMenuComponent} title="Menu" />
    <ItemMenuComponent href="/inicio" Icon={Icons8VelocimetroComponent} title="Inicio" />
    <ItemMenuComponent href="/siniestros" Icon={BaselineTimelineCompoent} title="Siniestros" />
    <ItemMenuComponent href="/liquidadores" Icon={BaselineTrending} title="Liquidadores" />
    <ItemMenuComponent href="/talleres" Icon={BaselineBuild} title="Talleres" />
    <ItemMenuComponent href="/presupuesto" Icon={BaselineMonetizationOn} title="Presupuesto" />
  </Container>
