import NavBarLiquidadorComponent from "../../../../libs/components/Navbar/NavBarLiquidador.component";
import Container from '../../../../libs/components/Container';
import ContainerMenuLateralLiquidadorComponent from "../../../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from "styled-components";
import { TitlePresupuesto } from "../../../../libs/components/TitlePresupuesto";
import Btn from "../../../../libs/components/Btn";
import { MenuTaller } from "./_MenuTaller";
import classNames from 'classnames';
import { useState } from "react";

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
      padding: 20px 0px;
    }
  }
`;

const Menu = ({
  btnActived = undefined as undefined | 'revisados' | 'sin_revisar' | 'rechazados',
}) => {
  return <div className="menu-taller">
    <Btn className={classNames({ actived: btnActived === 'revisados' }, "bg-orange")}>Revisados</Btn>
    <Btn className={classNames({ actived: btnActived === 'sin_revisar' }, "bg-orange-light")}>Sin revisar</Btn>
    <Btn className={classNames({ actived: btnActived === 'rechazados' }, "bg-yellow")}>Rechazados</Btn>
  </div>
}

const GridContent = ({ children }:React.PropsWithChildren<{}>) => {
  return <div className="grid-content">
    <div className="grid-body">
      {children}
    </div>
  </div>
}

const GridRevisados = () => {
  return <GridContent>
    <div className="header-sign">
      <div className="icon">
        
      </div>
    </div>
  </GridContent>;
}

const GridSinRevisar = () => {
  return <GridContent></GridContent>;
}

const GridRechazados = () => {
  return <GridContent></GridContent>;
}

export default () => {
  const [asd] = useState('revisados' as 'revisados' | 'sin_revisar' | 'rechazados');

  return <>
    <NavBarLiquidadorComponent></NavBarLiquidadorComponent>

    <Container>

      <ContainerMenuLateralLiquidadorComponent></ContainerMenuLateralLiquidadorComponent>

      <div style={{ width: '100%' }}>
        <Content>
          <MenuTaller></MenuTaller>

          <TitlePresupuesto><h1>Taller Protuerca</h1></TitlePresupuesto>

          <Menu btnActived={asd} />

          {asd === 'revisados' ? <GridRevisados /> : null}
          {asd === 'sin_revisar' ? <GridSinRevisar /> : null}
          {asd === 'rechazados' ? <GridRechazados /> : null}

        </Content>

      </div>

    </Container>
  </>;
}


