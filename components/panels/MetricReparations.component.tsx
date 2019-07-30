import React from 'react';
import styled from 'styled-components';
import IconfinderSedan285810Component from '../icons/IconfinderSedan285810.component';
import { Grid, Row, Cell } from '../grid';
import { PanelContainer, PanelHeader, PanelBody } from '../Panel';

const RowHeader = styled(Row)`
  text-align: center;
  text-size: bold;
`

const Grid2 = styled(Grid)``;

const Row2 = styled(Row)`
  border-bottom: solid 1px #e9e9e9;
`

const Cell2 = styled(Cell)`
  vertical-align: middle;
  text-align: center;
`

const Cell2TimeMiddle = styled(Cell2)`
  border-left: solid 1px black;
`;

const CellTitle = styled(Cell)`
  font-weight: 900; 
  padding: 20px;
`;

const TextDecorato2 = styled.span`
  color: #5d5151;
  text-transform: uppercase;
  padding: 20px;
`;

const ContainerIcon = styled.div`
  padding: 20px;
`;

export default ({ sizeIcon = 60 }) =>
  <PanelContainer>
    <PanelHeader>
      <h1>Reparación según nivel de daño</h1>
      <h2>Denuncia v/s Reparación</h2>
    </PanelHeader>

    <PanelBody>

      <Grid2>
        <RowHeader>
          <CellTitle colSpan={2}>Nivel de Daño</CellTitle>
          <CellTitle>Tiempo Promedio</CellTitle>
        </RowHeader>
        <Row2>
          <Cell2>
            <ContainerIcon><IconfinderSedan285810Component w={sizeIcon} p={75} /></ContainerIcon>
          </Cell2>
          <Cell2>
            <TextDecorato2>Leve</TextDecorato2>
          </Cell2>
          <Cell2TimeMiddle>21 días</Cell2TimeMiddle>
        </Row2>
        <Row2>
          <Cell2>
            <ContainerIcon><IconfinderSedan285810Component w={sizeIcon} p={50} /></ContainerIcon>
          </Cell2>
          <Cell2>
            <TextDecorato2>Mediano</TextDecorato2>
          </Cell2>
          <Cell2TimeMiddle>33 días</Cell2TimeMiddle>
        </Row2>
        <Row2>
          <Cell2>
            <ContainerIcon><IconfinderSedan285810Component w={sizeIcon} p={0} /></ContainerIcon>
          </Cell2>
          <Cell2>
            <TextDecorato2>Grave</TextDecorato2>
          </Cell2>
          <Cell2TimeMiddle>64 días</Cell2TimeMiddle>
        </Row2>
      </Grid2>


    </PanelBody>
  </PanelContainer>

