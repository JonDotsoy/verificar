import React from 'react';
import styled from 'styled-components';
import IconfinderSedan285810Component from '../icons/IconfinderSedan285810.component';
import { Grid, Row, Cell } from '../grid';

const Box = styled.div`
  display: block;
  font-family: 'Source Sans Pro', sans-serif;
  box-shadow: 0px 4px 4px 0px #00000012, 0px 2px 2px 0px #00000029;
  border-radius: 4px;
  overflow: hidden;
`;

const HeaderBox = styled.div`
  background-color: #ff9a01;
  padding: 10px;
  h1 {
    color: white;
    font-size: 28px;
  }
  h2 {
    color: #9fe4fa;
    font-size: 19px;
  }
`;

const BodyBox = styled.div``;

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

export default ({ sizeIcon = 100 }) =>
  <Box>
    <HeaderBox>
      <h1>Reparación según nivel de daño</h1>
      <h2>Denuncia v/s Reparación</h2>
    </HeaderBox>

    <BodyBox>

      <Grid2>
        <RowHeader>
          <CellTitle colSpan={2}>Nivel de Daño</CellTitle>
          <CellTitle>Tiempo Promedio</CellTitle>
        </RowHeader>
        <Row2>
          <Cell2>
            <IconfinderSedan285810Component w={sizeIcon} p={75} />
          </Cell2>
          <Cell2>
            Leve
          </Cell2>
          <Cell2TimeMiddle>21 días</Cell2TimeMiddle>
        </Row2>
        <Row2>
          <Cell2>
            <IconfinderSedan285810Component w={sizeIcon} p={50} />
          </Cell2>
          <Cell2>
            MEDIANO
          </Cell2>
          <Cell2TimeMiddle>33 días</Cell2TimeMiddle>
        </Row2>
        <Row2>
          <Cell2>
            <IconfinderSedan285810Component w={sizeIcon} p={0} />
          </Cell2>
          <Cell2>
            GRAVE
          </Cell2>
          <Cell2TimeMiddle>64 días</Cell2TimeMiddle>
        </Row2>
      </Grid2>


    </BodyBox>
  </Box>

