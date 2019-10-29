import React from 'react';
import { PanelRContainer, PanelRHeader, PanelRBody } from '../PanelR';
import { Row, Col, GridTable, RowTable, CellTable } from '../grid';
import styled from 'styled-components';
import PieGraphComponent from '../graphs/PieGraph.component';
import Link from 'next/link';
import { ResponsivePie, PieDatum } from '@nivo/pie';

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
    background-color: rgb(254, 154, 1);
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
  background-color: rgb(254, 154, 1);
  text-transform: uppercase;
  border: solid 1px black;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  margin-bottom: 2px;
  color: white;
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

const sampleDataPie = [
  {
    label: 'Rechazados',
    bg: 'rgb(116, 111, 112)',
    value: 2,
  },
  {
    label: 'Sin Revisar',
    bg: 'rgb(190,190,190)',
    value: 7,
  },
  {
    label: 'Aprovados P',
    bg: 'rgb(254,187,6)',
    value: 26,
  },
  {
    label: 'Aprovados',
    bg: 'rgb(251,138,8)',
    value: 42,
  },
].map((d, i, dts) => ({
  ...d,
  id: `${d.label} ${d.value} Vehiculos ${((d.value / dts.reduce((a, b) => a + b.value, 0)) * 100).toFixed(0)}%`,
}));

const StyleBoxPie = styled.div`
  svg {
    text {
      font-size: 14px !important;
    }
  }
`;

export default ({
  ...props
}) =>
  <PanelRContainer {...props}>
    <PanelRHeader style={{ backgroundColor: 'rgb(254, 154, 1)' }} title={'Presupuesto'}></PanelRHeader>
    <PanelRBody>

      <Row style={{
        alignItems: 'center'
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
              <StyleBoxPie style={{ position: 'relative', width: 380, height: 150 }}>
                <ResponsivePie
                  data={sampleDataPie}
                  sortByValue={false}
                  innerRadius={0.7}
                  enableRadialLabels={false}
                  enableSlicesLabels={false}
                  margin={{ right: 230, top: 0, bottom: 0, left: 0 }}
                  legends={[
                    {
                      anchor: 'right',
                      direction: 'column',
                      itemHeight: 20,
                      itemWidth: -10,
                    },
                  ]}
                  colors={d => d.bg as string}
                />
                <div style={{
                  position: 'absolute',
                  display: 'flex',
                  zIndex: 1,
                  left: 0,
                  top: 0,
                  width: 150,
                  height: 150,
                  justifyItems: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <div>Presupuestos</div>
                  <div>{sampleDataPie.reduce((a, b) => a + b.value, 0)} Vehiculos</div>
                </div>
              </StyleBoxPie>
              {/* <PieGraphComponent></PieGraphComponent> */}
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
                  <CellTable><Link href="/liquidador/siniestros/presupuesto"><a>{ide}</a></Link></CellTable>
                  <Patente><Link href="/liquidador/siniestros/presupuesto"><a>{patente}</a></Link></Patente>
                </RowTable>
              )}
            </Table>
          </ContentTable>

        </Col>
      </Row>

    </PanelRBody>
  </PanelRContainer>
