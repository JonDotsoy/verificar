import React from 'react';
import styled from "styled-components";
import ItemMenuComponent from "./ItemMenuLiquidador.component";
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
    <ItemMenuComponent href="/jefeLiquidador/inicio" Icon={Icons8VelocimetroComponent} title="Inicio" />
    <ItemMenuComponent href="/jefeLiquidador/siniestros" Icon={BaselineTimelineCompoent} title="Siniestros" />
    <ItemMenuComponent href="/jefeLiquidador/liquidadores" Icon={BaselineTrending} title="Liquidadores" />
    <ItemMenuComponent href="/jefeLiquidador/talleres" Icon={BaselineBuild} title="Talleres" />
    <ItemMenuComponent href="/jefeLiquidador/presupuesto" Icon={BaselineMonetizationOn} title="Presupuesto" />
  </Container>
