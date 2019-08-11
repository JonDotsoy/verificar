import React from 'react';
import { PanelRContainer, PanelRHeader, PanelRBody } from '../PanelR';
import { Row, Col, GridTable, RowTable, CellTable } from '../grid';
import styled from 'styled-components';
import PieGraphComponent from '../graphs/PieGraph.component';
import Link from 'next/link';

const BtnFilter = styled.button`
  text-transform: uppercase;
  border: solid 1px black;
  font-size: 16px;
  font-weight: 900;
  padding: 10px 20px;
  border-radius: 100px;
  width: 150px;
  margin-bottom: 10px;
  
  &.actived {
    background-color: rgb(165,197,88);
  }
`;

const defaultDataTable = [["7959", "CPFA-43"], ["5219", "CQAF-06"], ["4346", "QEFH-27"], ["7793", "KPJQ-12"], ["0346", "GINB-97"], ["5806", "HIAA-71"], ["9585", "GBIQ-29"], ["4477", "GCCM-12"], ["7245", "EOKL-42"], ["5392", "GOMQ-76"], ["9246", "AAJI-37"], ["4593", "NBEK-89"], ["0061", "DJDP-46"], ["4328", "ABQM-65"], ["1324", "IBHG-69"], ["7807", "OEDJ-87"], ["5236", "HNFP-85"], ["2514", "EJJM-53"], ["5266", "ONFB-35"], ["7821", "HKBG-73"], ["1195", "AHQI-44"], ["1700", "DNQP-39"], ["7746", "ONAB-06"], ["8742", "DCFA-09"], ["6870", "EGDD-62"], ["8318", "KHME-67"], ["1152", "PDJE-73"], ["7611", "OMQE-81"], ["7737", "EBIF-18"], ["4708", "EDLG-12"], ["3302", "NJOF-11"], ["8046", "DGOH-38"], ["5394", "CPGI-72"], ["1641", "FOFP-24"], ["9527", "LMIG-21"], ["0539", "KOKL-72"], ["5022", "HIDJ-13"], ["0672", "ICJE-92"], ["9282", "OLHC-59"], ["9889", "IONP-21"]];

const ContentTable = styled.div`
  max-height: 200px;
  overflow: scroll;
  border: solid 1px black;

  a {
    color: black;
    text-decoration: none;
  }
`;

const ContentTitle = styled.div`
  min-width: 200px;
  background-color: rgb(34,255,6);
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

const ColorView = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ color = 'rgb(252,255,13)' }) => color};
`;

export default ({
  ...props
}) =>
  <PanelRContainer {...props}>
    <PanelRHeader title={'Presupuesto'}></PanelRHeader>
    <PanelRBody>

      <Row style={{
      }}>
        <Col>
          <div>
            <BtnFilter type="button" className="actived">último mes</BtnFilter>
          </div>
          <div>
            <BtnFilter type="button">último semestre</BtnFilter>
          </div>
          <div>
            <BtnFilter type="button">último año</BtnFilter>
          </div>
        </Col>

        <Col>

          <Row style={{ minWidth: 460 }}>
            <Col>

              <PieGraphComponent></PieGraphComponent>
            </Col>

            <Col>
              <GridTable style={{ minWidth: "300px" }} showHead={false}>
                <RowTable></RowTable>
                <RowTable>
                  <CellTable><ColorView color="rgb(252,255,13)"></ColorView></CellTable>
                  <CellTable>Rechazados</CellTable>
                  <CellTable>2 vehiculos 10%</CellTable>
                </RowTable>
                <RowTable>
                  <CellTable><ColorView color="rgb(34,255,6)"></ColorView></CellTable>
                  <CellTable>Sin Revisar</CellTable>
                  <CellTable>7 vehiculos 22%</CellTable>
                </RowTable>
                <RowTable>
                  <CellTable><ColorView color="rgb(176,176,176)"></ColorView></CellTable>
                  <CellTable>Aprobados P</CellTable>
                  <CellTable>26 vehiculos 33%</CellTable>
                </RowTable>
                <RowTable>
                  <CellTable><ColorView color="rgb(251,0,6)"></ColorView></CellTable>
                  <CellTable>Aprobados</CellTable>
                  <CellTable>42 vehiculos 35%</CellTable>
                </RowTable>
              </GridTable>
            </Col>

          </Row>

        </Col>

        <Col>

          <ContentTitle>Aprobados</ContentTitle>
          <ContentTable>
            <Table>
              <RowTable>
                <CellTable>ID</CellTable>
                <CellTable>PATENTES</CellTable>
              </RowTable>
              {defaultDataTable.map(([ide, patente], i) =>
                <RowTable key={i}>
                  <CellTable><Link href="/siniestros/presupuesto"><a>{ide}</a></Link></CellTable>
                  <Patente><Link href="/siniestros/presupuesto"><a>{patente}</a></Link></Patente>
                </RowTable>
              )}
            </Table>
          </ContentTable>

        </Col>
      </Row>

    </PanelRBody>
  </PanelRContainer>
