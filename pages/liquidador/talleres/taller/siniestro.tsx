import NavBarLiquidadorComponent from "../../../../libs/components/Navbar/NavBarLiquidador.component";
import Container from '../../../../libs/components/Container';
import ContainerMenuLateralLiquidadorComponent from "../../../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from "styled-components";
import { TitlePresupuesto } from "../../../../libs/components/TitlePresupuesto";
import Btn from "../../../../libs/components/Btn";
import { MenuTaller } from "../../../../libs/components/MenuTaller";
import classNames from 'classnames';
import { useState, ReactNode } from "react";
import DoneComponent from "../../../../libs/components/icons/Done.component";
import CloseIcon from "../../../../libs/components/icons/CloseIcon";
import OutlineSearchComponent from "../../../../libs/components/icons/OutlineSearch.component";

const Content = styled.div`
  .menu-taller {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .grid-content {
    border: solid 1px black;
    max-width: 900px;
    margin: auto;
    background-color: rgb(250, 127, 1);
    padding: 20px 0px;

    & > .grid-body {
      background-color: white;

      & > .header-sign {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon svg {
          fill: black;
          width: 80px;
          height: 80px;
        }
        .value {
          text-align: center;
          color: black;
          .dt {
            font-size: 40px;
          }
          .label {
            text-transform: uppercase;
          }
        }
      }
    }

    &.panel-atrasados {
      & > .grid-body > .header-sign {
        .icon svg {
          fill: rgb(250, 127, 1);
        }
        .value {
          color: rgb(250, 127, 1);
        }
      }
    }

    &.panel-sin-ppto, &.panel-pendientes {
      & > .grid-body > .header-sign {
        .icon svg {
          fill: rgb(209, 8, 7);
        }
        .value {
          color: rgb(209, 8, 7);
        }
      }
    }
  }
`;

type TableDataOpts = {
  templateColumns?: number;
}

const TableData = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ templateColumns = 5 }: TableDataOpts) => templateColumns}, 1fr);

  max-height: 500px;
  overflow: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  &.header {
    background: rgb(203, 203, 203);
    .cel {
      text-transform: uppercase;
    }
  }

  .t-header, .t-row {
    display: contents;
    .cel {
      text-align: center;
    }
  }
  .t-row {
    .cel {
      padding-top: 20px;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: solid 1px #bfbfbf;
    }
    .d-n, .d-client, .d-monto {
      color: rgb(251, 156, 6);
    }
    .d-vehicle, .d-placa {
      text-transform: uppercase;
    }
    .d-fecha, .d-dias {
      color: rgb(209, 8, 7);
    }
  }
`;

const Menu = ({
  btnActived = undefined as undefined | 'atrasados' | 'sin_ppto' | 'pendientes',
  onActived = (panel: 'atrasados' | 'sin_ppto' | 'pendientes') => { },
}) => {
  return <div className="menu-taller">
    <Btn onClick={() => onActived('atrasados')} className={classNames({ actived: btnActived === 'atrasados' }, "bg-orange")}>Atrasados</Btn>
    <Btn onClick={() => onActived('sin_ppto')} className={classNames({ actived: btnActived === 'sin_ppto' }, "bg-orange-light")}>Sin PPTO</Btn>
    <Btn onClick={() => onActived('pendientes')} className={classNames({ actived: btnActived === 'pendientes' }, "bg-yellow")}>Pendientes</Btn>
  </div>
}

const GridContent = ({
  className = undefined as string | undefined,
  children = undefined as ReactNode | undefined,
}) => {
  return <div className={classNames(className, "grid-content")}>
    <div className="grid-body">
      {children}
    </div>
  </div>
}

const GridAtrasados = () => {
  return <GridContent className="panel-atrasados">
    <div className="header-sign">
      <div className="icon">
        <DoneComponent></DoneComponent>
      </div>
      <div className="value">
        <div className="dt">4</div>
        <div className="label">Atrasados</div>
      </div>
    </div>

    <TableData className="header" templateColumns={5}>
      <div className="t-header">
        <div className="cel d-n">N</div>
        <div className="cel d-client">Cliente</div>
        <div className="cel d-vehicle">Vehiculo</div>
        <div className="cel d-placa">Placa</div>
        <div className="cel d-dias">Dias de atraso</div>
      </div>
    </TableData>
    <TableData templateColumns={5}>
      {Array(40).fill(0).map(generatorSampleRowSiniestro)}
    </TableData>
  </GridContent>;
}

const GridSinPPTO = () => {
  return <GridContent className="panel-sin-ppto">
    <div className="header-sign">
      <div className="icon">
        <OutlineSearchComponent></OutlineSearchComponent>
      </div>
      <div className="value">
        <div className="dt">4</div>
        <div className="label">Sin PPTO</div>
      </div>
    </div>

    <TableData className="header" templateColumns={5}>
      <div className="t-header">
        <div className="cel d-n">N</div>
        <div className="cel d-client">Cliente</div>
        <div className="cel d-vehicle">Vehiculo</div>
        <div className="cel d-placa">Placa</div>
        <div className="cel d-dias">Dias de atraso</div>
      </div>
    </TableData>
    <TableData templateColumns={5}>
      {Array(40).fill(0).map(generatorSampleRowSiniestro)}
    </TableData>
  </GridContent>;
}

const GridPendientes = () => {
  return <GridContent className="panel-pendientes">
    <div className="header-sign">
      <div className="icon">
        <CloseIcon></CloseIcon>
      </div>
      <div className="value">
        <div className="dt">4</div>
        <div className="label">Pendientes</div>
      </div>
    </div>

    <TableData className="header" templateColumns={5}>
      <div className="t-header">
        <div className="cel d-n">N</div>
        <div className="cel d-client">Cliente</div>
        <div className="cel d-vehicle">Vehiculo</div>
        <div className="cel d-placa">Placa</div>
        <div className="cel d-dias">Dias de atraso</div>
      </div>
    </TableData>
    <TableData templateColumns={5}>
      {Array(40).fill(0).map(generatorSampleRowSiniestro)}
    </TableData>
  </GridContent>;
}

export default () => {
  const [panelSelected, setPanelSelected] = useState('pendientes' as 'atrasados' | 'sin_ppto' | 'pendientes');

  return <>
    <NavBarLiquidadorComponent></NavBarLiquidadorComponent>

    <Container>

      <ContainerMenuLateralLiquidadorComponent></ContainerMenuLateralLiquidadorComponent>

      <div style={{ width: '100%' }}>
        <Content>
          <MenuTaller></MenuTaller>

          <TitlePresupuesto><h1>Buscar</h1></TitlePresupuesto>

          <Menu btnActived={panelSelected} onActived={(panel) => setPanelSelected(panel)} />

          {panelSelected === 'atrasados' ? <GridAtrasados /> : null}
          {panelSelected === 'sin_ppto' ? <GridSinPPTO /> : null}
          {panelSelected === 'pendientes' ? <GridPendientes /> : null}

        </Content>

      </div>

    </Container>
  </>;
}

function generatorSampleRowSiniestro(_: any, i: number) {
  return <div key={i} className="t-row">
    <div className="cel d-n">121</div>
    <div className="cel d-client">Jose Antonio</div>
    <div className="cel d-vehicle">Kia</div>
    <div className="cel d-placa">HJGX12</div>
    <div className="cel d-fecha">4</div>
  </div>;
}

function generatorSampleRowVehicleAprov(_: any, i: number) {
  return <div key={i} className="t-row">
    <div className="cel d-n">121</div>
    <div className="cel d-client">Jose Antonio</div>
    <div className="cel d-vehicle">Kia</div>
    <div className="cel d-placa">HJGX12</div>
    <div className="cel d-monto">$200.000</div>
    <div className="cel d-fecha">25 / 10 / 2019</div>
  </div>;
}

