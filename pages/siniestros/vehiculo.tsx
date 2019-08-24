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

const ContentVehiculoDetail = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  padding: 0px 20px;
  display: flex;

  & > .panel {
    flex: 1;

    &.panel-detail {
      border: solid 2px black;
      padding: 10px;
      border-radius: 4px;
      overflow: auto;

      .row-data {
        border-bottom: solid 1px rgb(220, 227, 231);
        position: relative;
        display: flex;
        padding: 10px 0px;

        &:before {
          content: '';
          position: absolute;
          background-color: rgb(84, 82, 82);
          --w: 10px;
          width: var(--w);
          height: var(--w);
          margin-top: calc(5px);
          border-radius: 100px;
        }

        .label {
          color: rgb(233, 112, 2);
          padding-left: 20px;
          width: 160px;

          &:after {
            content: ':';
          }
        }

        .value {
          flex: 1;
          text-align: center;
        }

        &.row-data-textarea {
          flex-direction: column;
          .label {
            margin-bottom: 10px;
          }
          .value {
            text-align: left;
            padding: 10px;
            border-radius: 4px;
            border: solid 2px black;
            background-color: rgb(225, 223, 223);
          }
        }
      }
    }

    &.images {
      .content-images {
        background-color: rgb(233, 120, 15);
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 20px;
        margin-top: 10px;
        margin-left: 10px;
        position: relative;

        .label {
          position: absolute;
          background-color: rgb(233, 120, 15);
          border-radius: 4px;
          top: 0px;
          right: 10px;
          margin-top: -10px;
          padding: 0px 10px;
          color: white;
        }

        .img {
          height: 300px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
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

        <TitlePresupuesto><h1>MG 360 JF7H20</h1></TitlePresupuesto>

        <ContentVehiculoDetail>

          <div className="panel panel-detail">

            <div className="row-data"><div className="label">ID</div><div className="value">32154152</div></div>
            <div className="row-data"><div className="label">Fecha</div><div className="value">22/07/2019</div></div>
            <div className="row-data"><div className="label">Aseguradora</div><div className="value">HDI SEGUROS</div></div>
            <div className="row-data"><div className="label">Asegurado</div><div className="value">Salvador Reyes</div></div>
            <div className="row-data"><div className="label">Seguro</div><div className="value">BNN 22</div></div>
            <div className="row-data"><div className="label">DD Póliza</div><div className="value">HN42314213D</div></div>
            <div className="row-data"><div className="label">Vehículo</div><div className="value">MG 360</div></div>
            <div className="row-data"><div className="label">Patente</div><div className="value">JFH%12</div></div>
            <div className="row-data row-data-textarea">
              <div className="label">Descripción de daño</div>
              <div className="value">Choque frontal ......................</div>
            </div>

          </div>

          <div className="panel images">
            <div className="content-images sinister">
              <div className="label">Sinisetro</div>
              <div className="img" style={{
                backgroundImage: `url("http://2.bp.blogspot.com/-uhmYS2q92ng/Unvvbwg9-0I/AAAAAAAAAJE/M5wodYPJ3qo/s1600/AUTO.png")`,
              }}></div>
            </div>
            <div className="content-images inspect">
              <div className="label">Inspección</div>
              <div className="img" style={{
                backgroundImage: `url("https://loremflickr.com/320/240/car?lock=17")`,
              }}></div>
            </div>
          </div>

        </ContentVehiculoDetail>

      </Container>
    </ContainerComponent>
  </>
};
