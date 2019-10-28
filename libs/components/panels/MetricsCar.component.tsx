import React, { useRef, useEffect } from 'react';
import { PanelContainer, PanelHeader, PanelBody } from '../Panel';
import styled from 'styled-components';
import * as d3 from 'd3';
import { ResponsiveBar, Bar } from '@nivo/bar';

declare global {
  namespace NodeJS {
    interface Global {
      selector: any;
      d3: any;
    }
  }
}

global.d3 = d3;

const SVGGraph = styled.svg`
  width: 100%;
  height: 300px;
`;

const ImgGraph = styled.img`
  width: calc(100% - 40px);
  margin: 20px;
  box-sizing: auto;
`;

const Graph = ({ ...opts }) => <ImgGraph {...opts} src="/static/graphBar.png"></ImgGraph>

const rangeA = '$1 a $80.000';
const rangeB = '$80.001 a $130.000';
const rangeC = '$130.001 a $250.000';
const rangeD = 'mas de $250.001';

const sampleData = [
  {
    taller: 'Sin Golpes',
    [rangeA]: 60,
    [rangeB]: 50,
    [rangeC]: 40,
    [rangeD]: 30,
  },
  {
    taller: 'Ratoncito',
    [rangeA]: 30,
    [rangeB]: 50,
    [rangeC]: 20,
    [rangeD]: 30,
  },
  {
    taller: 'La Rueda',
    [rangeA]: 70,
    [rangeB]: 60,
    [rangeC]: 50,
    [rangeD]: 40,
  },
];

export default ({ ...props }) => {
  const refPanel = useRef<HTMLDivElement>(null);

  return <PanelContainer {...props}>
    <PanelHeader>
      <h1>Deducible y tiempo entrega</h1>
      <h2>Deducible v/s tiempo</h2>
    </PanelHeader>
    <PanelBody ref={refPanel}>
      <Bar
        height={300}
        width={refPanel.current ? refPanel.current.offsetWidth : 440}
        data={sampleData}
        keys={[
          rangeA,
          rangeB,
          rangeC,
          rangeD,
        ]}
        indexBy={"taller"}
        groupMode={"grouped"}
        colors={{ scheme: 'oranges' }}
        margin={{ top: 10, right: 10, bottom: 30, left: 30 }}
        // legends={[
        //   {
        //     dataFrom: 'keys',
        //     anchor: 'bottom-right',
        //     direction: 'column',
        //     itemWidth: -10,
        //     itemHeight: 20,
        //   }
        // ]}
      />
    </PanelBody>
  </PanelContainer>;
}
