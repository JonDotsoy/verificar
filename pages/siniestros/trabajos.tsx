import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../components/NavigationSinister.component';
import { TitlePresupuesto } from '../../components/TitlePresupuesto';

const Container = styled.div`
  flex-grow: 1;
`;

const ButtonShowDetaill = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: rgb(148, 148, 147);
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 20px;
    font-family: "Source Sans Pro", sans-serif;
    box-shadow: 0px 4px 3px 0px #7979792e;
    color: white;
    margin-bottom: 20px;
    border: solid 1px #7979792e;
  }
`;

const TimeLineCarReparting = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  background-color: rgb(227, 228, 229);
  border: solid 1px rgb(189, 190, 191);
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: start;

  .sectiontimeline {
    min-width: 150px;
    height: 100%;
    padding: 20px 0px;
    box-sizing: border-box;

    .label {
      text-align: center;
      margin-bottom: 10px;
      height: 20px;
      color: rgb(232, 114, 1);
    }

    .descpt {
      text-align: center;
    }

    .point {
      position: relative;
      height: 20px;
      margin-bottom: 20px;
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: white;
        left: 50%;
        margin-left: -10px;
        box-shadow: 0 0 0 2px rgb(54,175,167);
      }
      &:before {
        content: '';
        position: absolute;
        display: block;
        height: 10px;
        background-color: rgb(54,175,167);
        width: 100%;
        margin-top: 5px;
      }
    }

    &.focus {
      .point {
        &:after {
          box-shadow: 0 0 0 2px rgb(54,175,167), 0 0 0 8px rgb(232, 114, 1);
        }
      }
    }

    &:first-child {
      .point {
        &:before {
          width: 50%;
          left: 50%;
        }
      }
    }

    &:last-child {
      .point {
        &:before {
          width: 50%;
          left: 0%;
        }
      }
    }
  }
`;

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <NavigationSinisterComponent></NavigationSinisterComponent>

        <TitlePresupuesto><h1>Seguimiento Reparación</h1></TitlePresupuesto>

        <TimeLineCarReparting>

          <div className="sectiontimeline">
            <div className="label">Ingreso</div>
            <div className="point"></div>
            <div className="descpt">5 de Agosto</div>
          </div>
          <div className="sectiontimeline">
            <div className="label">XXXXX</div>
            <div className="point"></div>
            <div className="descpt">8 de Agosto</div>
          </div>
          <div className="sectiontimeline">
            <div className="label">YYYYY</div>
            <div className="point"></div>
            <div className="descpt">15 de Agosto</div>
          </div>
          <div className="sectiontimeline focus">
            <div className="label"></div>
            <div className="point"></div>

          </div>
          <div className="sectiontimeline">
            <div className="label"></div>
            <div className="point"></div>

          </div>
          <div className="sectiontimeline">
            <div className="label"></div>
            <div className="point"></div>

          </div>

        </TimeLineCarReparting>


        <ButtonShowDetaill>
          <button>Ver Pendientes</button>
        </ButtonShowDetaill>


      </Container>
    </ContainerComponent>
  </>
};
