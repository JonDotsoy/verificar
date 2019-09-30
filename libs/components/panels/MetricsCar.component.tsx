import React, { useRef, useEffect } from 'react';
import { PanelContainer, PanelHeader, PanelBody } from '../Panel';
import styled from 'styled-components';
import * as d3 from 'd3';

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

const GraphSvg = ({ ...opts}) => {
  const refSvg = useRef<SVGSVGElement>(null);

  const initializeGraphSvg = (svg: SVGSVGElement) => {
    const selector = d3.select(svg);

    global.selector = selector;

    const g1 = selector.append('g');

    g1.append('circle').attr('cx', 30).attr('cy', 30).attr('r', 6).style('fill', 'blue');

    console.log(svg.outerHTML);
  }

  useEffect(() => {
    if (refSvg.current) {
      const svg = refSvg.current;

      initializeGraphSvg(svg);
    }
  }, [refSvg.current]);

  return <SVGGraph {...opts} ref={refSvg}></SVGGraph>;
}

export default ({ ...props }) =>
  <PanelContainer {...props}>
    <PanelHeader>
      <h1>Deducible y tiempo entrega</h1>
      <h2>Deducible v/s tiempo</h2>
    </PanelHeader>
    <PanelBody>
      <Graph></Graph>
    </PanelBody>
  </PanelContainer>