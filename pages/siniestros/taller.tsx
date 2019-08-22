import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../components/NavigationSinister.component';
import { TitlePresupuesto } from '../../components/TitlePresupuesto';
import BaselineFace24pxComponent from '../../components/icons/BaselineFace24px.component';
import BaselineStayPrimaryPortrait24pxComponent from '../../components/icons/BaselineStayPrimaryPortrait24px.component';
import BaselineMailComponent from '../../components/icons/BaselineMail.component';
import BaselineLocationOnComponent from '../../components/icons/BaselineLocationOn.component';
import BaselineLocationCityComponent from '../../components/icons/BaselineLocationCity.component';
import CarOfHatchbackComponent from '../../components/icons/CarOfHatchback.component';
import FoldedNewspaperComponent from '../../components/icons/FoldedNewspaper.component';

const Container = styled.div`
  flex-grow: 1;
`;

const TallerDetail = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1000px;
    max-width: auto;
    & > div {
      flex: 1;
    }
  }

  .cover {
    background-image: url('https://www.drivim.com/wp-content/uploads/2017/11/bdn_pv-1024x597.png');
    background-position: center;
    background-size: cover;
    height: 200px;
  }

  .detail-contact {
    background-color: rgb(202, 203, 204);

    .datarow {
      border-bottom: solid 1px #e8e8e8;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 10px;
      svg {
        --w: 40px;
        fill: black;
        width: var(--w);
        height: var(--w);
      }
      .icon {
        width: 50px;
      }
      .text-label {
        color: rgb(229, 130, 61);
        width: 100px;
      }
      .text-value {
        flex: 1;
      }
    }
  }

  .detail-operation {
    .header {
      background-color: rgb(228, 194, 1);
      padding: 10px;
      h1 {
        text-transform: uppercase;
        color: white;
        font-size: 20px;
        text-align: center;
      }
    }

    .datarow {
      svg {
        fill: black;
      }

      .picture {
        --w: 150px;
        width: 100%;
        position: relative;
        height: var(--w);
        .icon {
          position: absolute;
          display: inline-block;
          left: calc(50% - (var(--w) / 2));
          svg {
            height: var(--w);
            width: var(--w);
          }
        }
        .text-label {
          position: absolute;
          left: calc(50% + (var(--w)/2) - 10px);
          padding: 10px 40px;
          background-color: rgb(232,112,0);
          top: calc(50% - 18px);
          border-radius: 5px;
          color: white;
        }
      }

      .text-title {
        color: rgb(234, 122, 16);
        text-align: center;
        font-size: 20px;
        text-transform: uppercase;
      }
    }
  }

`;

const DataRow = ({ Icon, label, value }: { Icon: any, label: string, value: string }) =>
  <div className="datarow">
    <div className="icon">
      <Icon></Icon>
    </div>
    <div className="text-label">{label}</div>
    <div className="text-value">{value}</div>
  </div>

const DataVehicle = ({ Icon, title, label, classname = '' }: { title: string, label: string, Icon: any, classname?: string }) =>
  <div className={`${classname} datarow`}>
    <div className="picture">
      <div className="text-label">{label}</div>
      <div className="icon"><Icon></Icon></div>
    </div>
    <div className="text-title">{title}</div>
  </div>

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <NavigationSinisterComponent></NavigationSinisterComponent>

        <TitlePresupuesto><h1>Taller Protuerca</h1></TitlePresupuesto>

        <TallerDetail>
          <div>
            <div className="detail-contact">
              <div className="cover"></div>
              <div className="detail">
                <DataRow
                  Icon={BaselineFace24pxComponent}
                  label="Dueño"
                  value="Alfredo fuentes"
                />
                <DataRow
                  Icon={BaselineStayPrimaryPortrait24pxComponent}
                  label="Télefono"
                  value="+56 9 1234 1234"
                />
                <DataRow
                  Icon={BaselineMailComponent}
                  label="email"
                  value="sample@sample.com"
                />
                <DataRow
                  Icon={BaselineLocationOnComponent}
                  label="Dirección"
                  value="Francisco bibao 2712"
                />
                <DataRow
                  Icon={BaselineLocationCityComponent}
                  label="Ciudad"
                  value="Santiago"
                />
              </div>
            </div>
            <div className="detail-operation">
              <div className="header">
                <h1>Información Operativa</h1>
              </div>

              <DataVehicle
                Icon={CarOfHatchbackComponent}
                label="10"
                title="vehiculos ingresados"
              />

              <DataVehicle
                Icon={CarOfHatchbackComponent}
                label="2"
                title="vehiculos atrasados"
              />

              <DataVehicle
                Icon={FoldedNewspaperComponent}
                label="4"
                title="presupuestos atrasados"
              />

            </div>
          </div>
        </TallerDetail>

      </Container>
    </ContainerComponent>
  </>
};
