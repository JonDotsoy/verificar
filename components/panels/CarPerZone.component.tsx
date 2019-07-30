import React from 'react';
import { PanelHeader, PanelContainer, PanelBody } from "../Panel";
import { Grid, Row, Cell } from "../grid";
import IconProgressBarComponent from "../icons/IconProgressBar.component";
import styled from "styled-components";

const RowHeader = styled(Row)`
  font-weight: 900;
  text-align: center;
`;

const XPanelContainer = styled(PanelContainer)`
  ${Cell} {
    padding: 20px;
  }
`;

const DescriptionContainer = styled.div`
  font-size: 20px;
`;

const TitleDescriptionContainer = styled.div`
  padding-bottom: 10px; 
`;

const SubTitleDescriptionContainer = styled.div`
  color: #808080;
`;

const Description = ({
  title = '{{title}}',
  subTitle = '{{subtitle}}',
}) => <DescriptionContainer>
    <TitleDescriptionContainer>{title}</TitleDescriptionContainer>
    <SubTitleDescriptionContainer>{subTitle}</SubTitleDescriptionContainer>
  </DescriptionContainer>

export default () =>
  <XPanelContainer>
    <PanelHeader>
      <h1>Autos por zona</h1>
      <h2>Día v/s atrasados.</h2>
    </PanelHeader>
    <PanelBody>
      <Grid showHead={false}>

        <RowHeader>
          <Cell>Medición</Cell>
          <Cell>Descripción</Cell>
        </RowHeader>

        <Row>
          <Cell>
            <IconProgressBarComponent valueLeft={160} valueRigth={140} progressValue={50} />
          </Cell>
          <Cell>
            <Description title={'Centro'} subTitle={'300 Vehículos'} />
          </Cell>
        </Row>


        <Row>
          <Cell>
            <IconProgressBarComponent valueLeft={76} valueRigth={200} progressValue={25} />
          </Cell>
          <Cell>
            <Description title={'Centro Sur'} subTitle={'276 Vehículos'} />
          </Cell>
        </Row>

        <Row>
          <Cell>
            <IconProgressBarComponent valueLeft={99} valueRigth={31} progressValue={75} />
          </Cell>
          <Cell>
            <Description title={'Centro Norte'} subTitle={'120 Vehículos'} />
          </Cell>
        </Row>

        <Row>
          <Cell>
            <IconProgressBarComponent valueLeft={60} valueRigth={31} progressValue={60} />
          </Cell>
          <Cell>
            <Description title={'Sur'} subTitle={'91 Vehículos'} />
          </Cell>
        </Row>

      </Grid>
    </PanelBody>
  </XPanelContainer>