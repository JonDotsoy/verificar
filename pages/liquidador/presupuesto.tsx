import React from 'react';
import NavBarComponent from '../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../libs/components/Container';
import MenuNavComponent from "../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../libs/components/NavigationSinister.component';
import BaselineSearchComponent from '../../libs/components/icons/BaselineSearch.component';
import { TitlePresupuesto } from '../../libs/components/TitlePresupuesto';
import OutlineSettingsComponent from '../../libs/components/icons/OutlineSettings.component';

const Container = styled.div`
  flex-grow: 1;
`;

const ContainerTable = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 1000px;
  }
`;

const TableResumenPresupuesto = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 30px;
  margin-bottom: 30px;

  td {
    padding: 5px;
  }

  tr td {
    &:first-child {
      padding-right: 100px;
    }
    &:last-child {
      text-align: right;
    }
  }

  .total {
    font-size: 25px;
  }

  .result {
    color: rgb(252, 116, 0);
  }
`;

const TableDetallesPesupuesto = styled.table`
  font-family: "Source Sans Pro", sans-serif;

  thead tr {
    background-color: rgb(183,181,181);
    th {
      padding: 10px 20px;
      margin-bottom: 20px;
      &:first-child {
        border-radius: 100px 0px 0px 100px;
      }
      &:last-child {
        border-radius: 0px 100px 100px 0px;
      }
    }
  }

  tbody {
    tr {
      td {
        text-align: center;
        padding: 5px;
      }
      &:first-child {
        td {
          padding-top: 20px;
        }
      }
    }
  }
`;

const TableDetallesPesupuesto2 = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto auto auto auto auto auto;

  text-align: center;
  .wrapRow > .row {
    padding: 5px;
    justify-content: center;
    display: inline-flex;
    justify-items: center;
    align-items: center;
  }

  .item-head {
    background-color: rgb(183,181,181);
    padding: 10px 20px;
    margin-bottom: 20px;
    &:first-child {
      border-radius: 100px 0px 0px 100px;
    }
    &:nth-child(8) {
      border-radius: 0px 100px 100px 0px;
    }
  }

  .itemm-accctionable {
    justify-content: start;

    .val {
      flex: 1;
      margin-top: -5px;
      margin-right: -5px;
      margin-bottom: -5px;
      text-align: left;
      padding-left: 10px;
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    button {
      border: none;
      background: none;
      padding: 0px;

      svg {
        opacity: 0;
        background-color: rgb(236, 120, 14);
        fill: white;
        border-radius: 100%;
        padding: 5%;
        box-sizing: border-box;
        --size: 25px;
        width: var(--size);
        height: var(--size);
        margin-right: 15px;
      }

      &:focus {
        svg {
          opacity: 1;
        }
      }
    }

  }

  .wrapRow {
    display: contents;
  }

  .wrapRow:hover > .row {

    &.itemm-accctionable {
      button svg {
        opacity: 1;
      }
    }
  }

  .wrapRow:hover > .row {
    &.itemm-accctionable {
      .val {
        background-color: rgb(236, 120, 14);
        border-radius: 20px 0px 0px 20px;
      }
    }
    
    &:nth-child(1n+2) {
      background-color: rgb(236, 120, 14);
    }

    &:nth-child(8) {
      border-radius: 0px 20px 20px 0px;
    }
  }
`;

const TableStadoPresupuesto = styled.table`
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  thead {
    th {
      padding: 20px;
      color: white;
      text-transform: uppercase;

      &:nth-child(1) {
        background-color: rgb(112,110,112);
      }
      &:nth-child(2) {
        background-color: rgb(251,156,6);
      }
      &:nth-child(3) {
        background-color: rgb(232,112,2);
      }
      &:nth-child(4) {
        background-color: rgb(228,194,1);
      }
    }
  }
  tbody {
    td {
      vertical-align: top;
      border: solid 1px rgb(141,142,143);
      padding: 10px;

      &:nth-child(2) {
        max-width: 400px;
      }
    }
  }
`;

const ButtonSearch = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(231,113,3);
  border-radius: 4px;
  padding: 10px;

  label {
    text-transform: uppercase;
    color: white;
  }

  svg {
    fill: white;
  }
`;

const AvatarProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    border-radius: 100%;
  }
  h3 {
    padding-left: 10px;
  }
`;

const ImageTaller = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
  }
  h3 {
    padding-left: 10px;
  }
`;

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <NavigationSinisterComponent></NavigationSinisterComponent>

        <TitlePresupuesto><h1>544/TOYOTA HILUX /PV-HR-45/ROJO</h1></TitlePresupuesto>

        <ContainerTable>
          <div>
            <TableDetallesPesupuesto2>

              <div className="item-head">Código REP</div>
              <div className="item-head">Descripción Respuestos</div>
              <div className="item-head">R/C</div>
              <div className="item-head">HRS</div>
              <div className="item-head">Pieza Pintada</div>
              <div className="item-head">Cantidad</div>
              <div className="item-head">Valor HRS</div>
              <div className="item-head">Valor P/Pintura</div>

              <div className="wrapRow">
                <div className="row itemm-accctionable"><button><OutlineSettingsComponent></OutlineSettingsComponent></button><span className="val">2234</span></div>
                <div className="row">Espejo ext eléctrico derecho</div>
                <div className="row">Cambio</div>
                <div className="row">1,5</div>
                <div className="row">0,3</div>
                <div className="row">1</div>
                <div className="row">$8.250</div>
                <div className="row">$8.250</div>
              </div>

              <div className="wrapRow">
                <div className="row itemm-accctionable"><button><OutlineSettingsComponent></OutlineSettingsComponent></button><span className="val">2234</span></div>
                <div className="row">Espejo ext eléctrico derecho</div>
                <div className="row">Cambio</div>
                <div className="row">1,5</div>
                <div className="row">0,3</div>
                <div className="row">1</div>
                <div className="row">$8.250</div>
                <div className="row">$8.250</div>
              </div>

              <div className="wrapRow">
                <div className="row itemm-accctionable"><button><OutlineSettingsComponent></OutlineSettingsComponent></button><span className="val">2234</span></div>
                <div className="row">Espejo ext eléctrico derecho</div>
                <div className="row">Cambio</div>
                <div className="row">1,5</div>
                <div className="row">0,3</div>
                <div className="row">1</div>
                <div className="row">$8.250</div>
                <div className="row">$8.250</div>
              </div>

              <div className="wrapRow">
                <div className="row itemm-accctionable"><button><OutlineSettingsComponent></OutlineSettingsComponent></button><span className="val">2234</span></div>
                <div className="row">Espejo ext eléctrico derecho</div>
                <div className="row">Cambio</div>
                <div className="row">1,5</div>
                <div className="row">0,3</div>
                <div className="row">1</div>
                <div className="row">$8.250</div>
                <div className="row">$8.250</div>
              </div>

            </TableDetallesPesupuesto2>
            <TableResumenPresupuesto>
              <tbody>
                <tr>
                  <td>Total mano de obra</td>
                  <td>$38.350</td>
                </tr>
                <tr>
                  <td>Total pintura</td>
                  <td>$44.000</td>
                </tr>
                <tr>
                  <td>Sub totales</td>
                  <td>$82.000</td>
                </tr>
                <tr>
                  <td>IVA</td>
                  <td>$15.500</td>
                </tr>
                <tr className="total">
                  <td>Total:</td>
                  <td className="result">$97.997</td>
                </tr>
              </tbody>
            </TableResumenPresupuesto>

            <TableStadoPresupuesto>
              <thead>
                <tr>
                  <th>Estado</th>
                  <th>Comentarios</th>
                  <th>Taller</th>
                  <th>Encargado de Presupuesto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ButtonSearch>
                      <BaselineSearchComponent></BaselineSearchComponent>
                      <label>En revisión</label>
                    </ButtonSearch>
                  </td>
                  <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque unde provident, iusto minima obcaecati officia ducimus! Error hic saepe totam vel dolores, eveniet quos beatae ipsam similique veritatis magnam nemo?</td>
                  <td>
                    <ImageTaller>
                      <img src="https://via.placeholder.com/150" alt="" />
                      <h3>Pro Tuerca</h3>
                    </ImageTaller>
                  </td>
                  <td>
                    <AvatarProfile>
                      <img src="https://i.pravatar.cc/300?u=2" alt="" />
                      <h3>José Paredes</h3>
                    </AvatarProfile>
                  </td>
                </tr>
              </tbody>
            </TableStadoPresupuesto>

          </div>
        </ContainerTable>

      </Container>

    </ContainerComponent>
  </>
}
