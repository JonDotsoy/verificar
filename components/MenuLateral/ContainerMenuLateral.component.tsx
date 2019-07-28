import React from 'react';
import styled from "styled-components";
import ItemMenuComponent from "./ItemMenu.component";
import BaselineTimelineCompoent from '../icons/BaselineTimeline.compoent';
import BaselineTrending from '../icons/BaselineTrending';
import BaselineBuild from '../icons/BaselineBuild';
import BaselineMonetizationOn from '../icons/BaselineMonetizationOn';

const Container = styled.div`
  background-color: black;
  display: inline-block;
  min-width: 330px;
  padding: 20px 0px;
`;

export default () =>
  <Container>
    <ItemMenuComponent Icon={BaselineTimelineCompoent} title="Inicio" actived={true} />
    <ItemMenuComponent Icon={BaselineTimelineCompoent} title="Siniestros" />
    <ItemMenuComponent Icon={BaselineTrending} title="Liquidadores" />
    <ItemMenuComponent Icon={BaselineBuild} title="Talleres" />
    <ItemMenuComponent Icon={BaselineMonetizationOn} title="Presupuesto" />
  </Container>
