import React, { } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styled from 'styled-components';

const sampleData = [
  {
    dia: 1,
    presupuesto: 9,
  },
  {
    dia: 2,
    presupuesto: 9,
  },
  {
    dia: 3,
    presupuesto: 5,
  },
  {
    dia: 4,
    presupuesto: 9,
  },
  {
    dia: 5,
    presupuesto: 13,
  },
  {
    dia: 6,
    presupuesto: 15,
  },
  {
    dia: 7,
    presupuesto: 12,
  },
  {
    dia: 8,
    presupuesto: 10,
  },
  {
    dia: 9,
    presupuesto: 7,
  },
  {
    dia: 10,
    presupuesto: 9,
  },
  {
    dia: 11,
    presupuesto: 8,
    presupuestoColor: 'red',
  },
  {
    dia: 12,
    presupuesto: 7,
    presupuestoColor: 'red',
  },
  {
    dia: 13,
    presupuesto: 6,
    presupuestoColor: 'red',
  },
  {
    dia: 14,
    presupuesto: 5,
    presupuestoColor: 'red',
  },
];

const Style = styled.div`
  height: 400px;
`;

export default () => {
  return <Style>
    <ResponsiveBar
      data={sampleData}
      groupMode={'grouped'}
      keys={['presupuesto']}
      indexBy={'dia'}
      margin={{ top: 10, left: 60, bottom: 60, right: 10 }}
      enableLabel={false}
      animate={true}
      layout='vertical'
      axisLeft={{
        legend: 'Presupuesto',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      axisBottom={{
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
      }}
    />
  </Style>;
}
