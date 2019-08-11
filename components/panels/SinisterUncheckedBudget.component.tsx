import React from 'react';
import { PanelRContainer, PanelRHeader, PanelRBody } from '../PanelR';
import { Row, Col, CellTable, GridTable, RowTable } from '../grid';
import styled from 'styled-components';
import BarGraphComponent from '../graphs/BarGraph.component';

const defaultDataTable = [["7959", "CPFA-43"], ["5219", "CQAF-06"], ["4346", "QEFH-27"], ["7793", "KPJQ-12"], ["0346", "GINB-97"], ["5806", "HIAA-71"], ["9585", "GBIQ-29"], ["4477", "GCCM-12"], ["7245", "EOKL-42"], ["5392", "GOMQ-76"], ["9246", "AAJI-37"], ["4593", "NBEK-89"], ["0061", "DJDP-46"], ["4328", "ABQM-65"], ["1324", "IBHG-69"], ["7807", "OEDJ-87"], ["5236", "HNFP-85"], ["2514", "EJJM-53"], ["5266", "ONFB-35"], ["7821", "HKBG-73"], ["1195", "AHQI-44"], ["1700", "DNQP-39"], ["7746", "ONAB-06"], ["8742", "DCFA-09"], ["6870", "EGDD-62"], ["8318", "KHME-67"], ["1152", "PDJE-73"], ["7611", "OMQE-81"], ["7737", "EBIF-18"], ["4708", "EDLG-12"], ["3302", "NJOF-11"], ["8046", "DGOH-38"], ["5394", "CPGI-72"], ["1641", "FOFP-24"], ["9527", "LMIG-21"], ["0539", "KOKL-72"], ["5022", "HIDJ-13"], ["0672", "ICJE-92"], ["9282", "OLHC-59"], ["9889", "IONP-21"]];

const ContentTable = styled.div`
  max-height: 200px;
  overflow: scroll;
  border: solid 1px black;
`;

const ContentTitle = styled.div`
  min-width: 200px;
  background-color: rgb(248, 0, 7);
  color: white;
  text-transform: uppercase;
  border: solid 1px black;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  margin-bottom: 2px;
`;

const Table = styled(GridTable)`
  font-size: 200;
  text-align: center;

  thead {
    font-weight: 600;
    td {
      padding-bottom: 10px;
    }
  }
`;

const Patente = styled(CellTable)`
  font-family: 'Source Code Pro', monospace;
`;

export default ({
  ...props
}) =>
  <PanelRContainer {...props}>
    <PanelRHeader title={'Presupuesto sin revisar'}></PanelRHeader>
    <PanelRBody>

      <Row>
        <Col>

          <BarGraphComponent></BarGraphComponent>

        </Col>
        <Col>

          <ContentTitle>11 Días</ContentTitle>
          <ContentTable>
            <Table>
              <RowTable>
                <CellTable>IDE</CellTable>
                <CellTable>PATENTES</CellTable>
              </RowTable>
              {defaultDataTable.map(([ide, patente], i) =>
                <RowTable key={i}>
                  <CellTable>{ide}</CellTable>
                  <Patente>{patente}</Patente>
                </RowTable>
              )}
            </Table>
          </ContentTable>

        </Col>
      </Row>

    </PanelRBody>
  </PanelRContainer>
