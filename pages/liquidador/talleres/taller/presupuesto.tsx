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

    &.panel-revisados {
      & > .grid-body > .header-sign {
        .icon svg {
          fill: rgb(250, 127, 1);
        }
        .value {
          color: rgb(250, 127, 1);
        }
      }
    }

    &.panel-sin-revisar, &.panel-rechazados {
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
    .d-fecha {
      color: rgb(209, 8, 7);
    }
  }
`;

const Menu = ({
  btnActived = undefined as undefined | 'revisados' | 'sin_revisar' | 'rechazados',
  onActived = (panel: 'revisados' | 'sin_revisar' | 'rechazados') => { },
}) => {
  return <div className="menu-taller">
    <Btn onClick={() => onActived('revisados')} className={classNames({ actived: btnActived === 'revisados' }, "bg-orange")}>Revisados</Btn>
    <Btn onClick={() => onActived('sin_revisar')} className={classNames({ actived: btnActived === 'sin_revisar' }, "bg-orange-light")}>Sin revisar</Btn>
    <Btn onClick={() => onActived('rechazados')} className={classNames({ actived: btnActived === 'rechazados' }, "bg-yellow")}>Rechazados</Btn>
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

const GridRevisados = () => {
  return <GridContent className="panel-revisados">
    <div className="header-sign">
      <div className="icon">
        <DoneComponent></DoneComponent>
      </div>
      <div className="value">
        <div className="dt">4</div>
        <div className="label">Revisados</div>
      </div>
    </div>

    <TableData className="header" templateColumns={6}>
      <div className="t-header">
        <div className="cel d-n">N</div>
        <div className="cel d-client">Cliente</div>
        <div className="cel d-vehicle">Vehiculo</div>
        <div className="cel d-monto">Monto</div>
        <div className="cel d-placa">Placa</div>
        <div className="cel d-fecha">Fecha</div>
      </div>
    </TableData>
    <TableData templateColumns={6}>
      {Array(40).fill(0).map(generatorSampleRowVehicleAprov)}
    </TableData>
  </GridContent>;
}

const GridSinRevisar = () => {
  return <GridContent className="panel-sin-revisar">
    <div className="header-sign">
      <div className="icon">
        <OutlineSearchComponent></OutlineSearchComponent>
      </div>
      <div className="value">
        <div className="dt">4</div>
        <div className="label">Sin revisar</div>
      </div>
    </div>

    <TableData className="header" templateColumns={5}>
      <div className="t-header">
        <div className="cel d-n">N</div>
        <div className="cel d-client">Cliente</div>
        <div className="cel d-vehicle">Vehiculo</div>
        <div className="cel d-placa">Placa</div>
        <div className="cel d-fecha">Fecha</div>
      </div>
    </TableData>
    <TableData templateColumns={5}>
      {Array(40).fill(0).map(generatorSampleRowVehicle)}
    </TableData>
  </GridContent>;
}

const GridRechazados = () => {
  return <GridContent className="panel-rechazados">
    <div className="header-sign">
      <div className="icon">
        <CloseIcon></CloseIcon>
      </div>
      <div className="value">
        <div className="dt">4</div>
        <div className="label">Rechazados</div>
      </div>
    </div>

    <TableData className="header" templateColumns={5}>
      <div className="t-header">
        <div className="cel d-n">N</div>
        <div className="cel d-client">Cliente</div>
        <div className="cel d-vehicle">Vehiculo</div>
        <div className="cel d-placa">Placa</div>
        <div className="cel d-fecha">Fecha</div>
      </div>
    </TableData>
    <TableData templateColumns={5}>
      {Array(40).fill(0).map(generatorSampleRowVehicle)}
    </TableData>
  </GridContent>;
}

export default () => {
  const [panelSelected, setPanelSelected] = useState('revisados' as 'revisados' | 'sin_revisar' | 'rechazados');

  return <>
    <NavBarLiquidadorComponent></NavBarLiquidadorComponent>

    <Container>

      <ContainerMenuLateralLiquidadorComponent></ContainerMenuLateralLiquidadorComponent>

      <div style={{ width: '100%' }}>
        <Content>
          <MenuTaller></MenuTaller>

          <TitlePresupuesto><h1>Taller Protuerca</h1></TitlePresupuesto>

          <Menu btnActived={panelSelected} onActived={(panel) => setPanelSelected(panel)} />

          {panelSelected === 'revisados' ? <GridRevisados /> : null}
          {panelSelected === 'sin_revisar' ? <GridSinRevisar /> : null}
          {panelSelected === 'rechazados' ? <GridRechazados /> : null}

        </Content>

      </div>

    </Container>
  </>;
}

function generatorSampleRowVehicle(_: any, i: number) {
  return <div key={i} className="t-row">
    <div className="cel d-n">121</div>
    <div className="cel d-client">Jose Antonio</div>
    <div className="cel d-vehicle">Kia</div>
    <div className="cel d-placa">HJGX12</div>
    <div className="cel d-fecha">25 / 10 / 2019</div>
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

