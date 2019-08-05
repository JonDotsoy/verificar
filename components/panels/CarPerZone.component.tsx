import React from 'react';
import { PanelHeader, PanelContainer, PanelBody } from "../Panel";
import { GridTable, CellTable, RowTable } from "../grid";
import IconProgressBarComponent from "../icons/IconProgressBar.component";
import styled from "styled-components";

const RowHeader = styled(RowTable)`
  font-weight: 900;
  text-align: center;
`;

const XPanelContainer = styled(PanelContainer)`
  ${CellTable} {
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

export default ({ ...props }) =>
  <XPanelContainer {...props}>
    <PanelHeader>
      <h1>Autos por zona</h1>
      <h2>Día v/s atrasados.</h2>
    </PanelHeader>
    <PanelBody>
      <GridTable showHead={false}>

        <RowHeader>
          <CellTable>Medición</CellTable>
          <CellTable>Descripción</CellTable>
        </RowHeader>

        <RowTable>
          <CellTable>
            <IconProgressBarComponent valueLeft={160} valueRigth={140} progressValue={50} />
          </CellTable>
          <CellTable>
            <Description title={'Centro'} subTitle={'300 Vehículos'} />
          </CellTable>
        </RowTable>


        <RowTable>
          <CellTable>
            <IconProgressBarComponent valueLeft={76} valueRigth={200} progressValue={25} />
          </CellTable>
          <CellTable>
            <Description title={'Centro Sur'} subTitle={'276 Vehículos'} />
          </CellTable>
        </RowTable>

        <RowTable>
          <CellTable>
            <IconProgressBarComponent valueLeft={99} valueRigth={31} progressValue={75} />
          </CellTable>
          <CellTable>
            <Description title={'Centro Norte'} subTitle={'120 Vehículos'} />
          </CellTable>
        </RowTable>

        <RowTable>
          <CellTable>
            <IconProgressBarComponent valueLeft={60} valueRigth={31} progressValue={60} />
          </CellTable>
          <CellTable>
            <Description title={'Sur'} subTitle={'91 Vehículos'} />
          </CellTable>
        </RowTable>

      </GridTable>
    </PanelBody>
  </XPanelContainer>
