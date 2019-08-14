import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import Head from 'next/head';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import SinisterBudget from '../../components/panels/SinisterBudget.component';
import SinisterUncheckedBudgetComponent from '../../components/panels/SinisterUncheckedBudget.component';
import styled from 'styled-components';
import ResetCSS from '../../components/ResetCSS';
import NavigationSinisterComponent from '../../components/NavigationSinister.component';

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
  }
`;

const TitlePresupuesto = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-family: "Source Sans Pro", sans-serif;
    background-color: rgb(236,143,55);
    border-radius: 100px;
    padding: 10px 30px;
    display: inline-block;
    font-size: 20px;
    color: rgb(54,71,80);
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
            <TableDetallesPesupuesto>
              <thead>
                <tr>
                  <th>Código REP</th>
                  <th>Descripción Respuestos</th>
                  <th>R/C</th>
                  <th>HRS</th>
                  <th>Pieza Pintada</th>
                  <th>Cantidad</th>
                  <th>Valor HRS</th>
                  <th>Valor P/Pintura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2234</td>
                  <td>Espejo ext eléctrico derecho</td>
                  <td>Cambio</td>
                  <td>1,5</td>
                  <td>0,3</td>
                  <td>1</td>
                  <td>$8.250</td>
                  <td>$8.250</td>
                </tr>
                <tr>
                  <td>2234</td>
                  <td>Espejo ext eléctrico derecho</td>
                  <td>Cambio</td>
                  <td>1,5</td>
                  <td>0,3</td>
                  <td>1</td>
                  <td>$8.250</td>
                  <td>$8.250</td>
                </tr>
                <tr>
                  <td>2234</td>
                  <td>Espejo ext eléctrico derecho</td>
                  <td>Cambio</td>
                  <td>1,5</td>
                  <td>0,3</td>
                  <td>1</td>
                  <td>$8.250</td>
                  <td>$8.250</td>
                </tr>
                <tr>
                  <td>2234</td>
                  <td>Espejo ext eléctrico derecho</td>
                  <td>Cambio</td>
                  <td>1,5</td>
                  <td>0,3</td>
                  <td>1</td>
                  <td>$8.250</td>
                  <td>$8.250</td>
                </tr>
              </tbody>
            </TableDetallesPesupuesto>
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
          </div>
        </ContainerTable>

      </Container>

    </ContainerComponent>
  </>
}
