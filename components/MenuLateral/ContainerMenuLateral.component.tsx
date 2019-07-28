import React from 'react';
import styled from "styled-components";
import ItemMenuComponent from "./ItemMenu.component";
import BaselineTimelineCompoent from '../icons/BaselineTimeline.compoent';
import BaselineTrending from '../icons/BaselineTrending.component';
import BaselineBuild from '../icons/BaselineBuild.component';
import BaselineMonetizationOn from '../icons/BaselineMonetizationOn.component';

const Container = styled.div`
  background-color: black;
  display: inline-block;
  min-width: 330px;
  padding: 20px 0px;
`;

export default () =>
  <Container>
    <ItemMenuComponent href="/inicio" Icon={BaselineTimelineCompoent} title="Inicio" actived={true} />
    <ItemMenuComponent href="/siniestros" Icon={BaselineTimelineCompoent} title="Siniestros" />
    <ItemMenuComponent href="/" Icon={BaselineTrending} title="Liquidadores" />
    <ItemMenuComponent href="/" Icon={BaselineBuild} title="Talleres" />
    <ItemMenuComponent href="/" Icon={BaselineMonetizationOn} title="Presupuesto" />
  </Container>
