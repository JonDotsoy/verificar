import React, { useState, useRef } from 'react';
import NavBarComponent from '../../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../../libs/components/Container';
import MenuNavComponent from "../../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from 'styled-components';
import ArrowDropDownComponent from '../../../libs/components/icons/ArrowDropDown.component';
import classNames from 'classnames';
import { makeSampleValues } from '../../../libs/S';
import SearchSelect from "../../../libs/components/inputSelect";

const Container = styled.div`
  flex-grow: 1;
  padding-top: 20px;
  font-family: "Source Sans Pro", sans-serif;
`;

const ContainerSeaarch = styled.div`
  height: 400px;
  max-width: 900px;
  margin: auto;

  .sorter-selected {
    position: relative;

    button {
      border: none;
      background: none;
      padding: 0px;
      svg {
        transition: transform 300ms;
      }
    }

    .options-selectable {
      display: none;
      position: absolute;
      top: 100%;
      right: 0px;

      .option {

        button {
          color: white;
          border: none;
          background-color: initial;
          font-size: 14px;
          font-family: "Source Sans Pro", sans-serif;
          width: 100%;
          background-color: rgb(218, 138, 65);
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          min-width: 100%;
          box-sizing: border-box;
          border-bottom: solid 2px rgb(208, 108, 19);
        }

        &.selected {
          button {
            background-color: rgb(252, 229, 101);
          }
        }
      }
    }

    &.selected {
      .options-selectable {
        display: block;
      }
      button {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

const ContentSearch = styled.div`
  background-color: rgb(234, 120, 14);
  padding: 30px 0px;
  display: flex;

  .content-search {
    display: inline-flex;
    position: relative;
    margin: auto;

    &.filter-selected {
      label {
        display: inline-flex;

        &:after {
          content: ':';
        }
      }

      input.search {
        border-radius: 0px 50px 50px 0px;
      }
    }

    label {
      display: none;
      border: none;
      border-radius: 50px 0px 0px 50px;
      background-color: rgb(252,163,83);
      min-width: 50px;
      justify-self: center;
      align-self: center;
      min-height: 50px;
      text-align: center;
      color: rgb(255,236,216);
      font-size: 15px;

      padding: 0px 0px 0px 20px;
      justify-content: center;
      align-items: center;
    }

    input.search {
      border: none;
      border-radius: 50px 50px 50px 50px;
      background-color: rgb(252,163,83);
      box-sizing: border-box;
      padding: 10px 20px;
      font-size: 15px;
      width: 450px;
      color: rgb(255,236,216);
    }

    .btnSelect {
      position: absolute;
      background: none;
      border: none;
      top: calc(50% - 20px);
      height: 20px;
      color: white;
      right: 10px;

      svg {
        transition: transform 300ms;
      }

      svg.revert {
        transform: rotate(180deg);
      }
    }

    .toggle-list {
      position: absolute;
      z-index: 100;
      display: none;

      &.visible {
        display: block;
      }

      .item {
        background-color: rgb(252,163,83);
        border-radius: 50px;
        background-color: rgb(252,163,83);
        box-sizing: border-box;
        padding: 10px 20px;
        font-size: 15px;
        width: 450px;
        color: rgb(255,236,216);

        &:hover {
          background-color: rgb(246, 147, 58);
        }

        button {
          border: none;
          background: none;
          font-size: 15px;
          color: rgb(255,236,216);
          padding: initial;
          width: 100%;
        }
      }
    }
  }
`;

const ContentTable = styled.div`
  border: solid 1px black;
`;

const TableResultSearch = styled.table`
  width: 100%;
  /* border: solid 1px black; */

  td, th {
    text-align: center;
    padding: 10px 0px;
  }

  th svg {
    fill: black;
  }

  thead {
    background-color: rgb(203, 203, 203);

    th {
      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  tbody {
    color: rgb(88, 92, 93);

    tr {
      border-bottom: solid 1px rgb(231, 233, 232);
    }

    td.primary-color {
      color: rgb(252,163,83);
    }
  }
`;

const dataTable = makeSampleValues({
  id: Array(10).fill(void 0).map((_, i) => i + 11),
  cliente: ['Jose', 'Manuel', 'Ignasio', 'Solis'],
  marca: ['KIA SPORTAGE', 'TOYOTA YARIS', 'TOYOTA YARIS', 'TOYOTA YARIS'],
  place: ['HJ2352', 'TG5466', 'GHDR21', 'TGSD34'],
  estado: [...Array(3).fill('DESPACHO'), 'REPARADO'],
});

export default () => {
  const [dropDownlSelecctorSeachOpen, setFocusSearch] = useState(false);
  const [filterByProperty, setFilterByProperty] = useState(undefined as string | undefined);
  const inputSearch = useRef<HTMLInputElement>(null);
  const [toggleSortBy, setToggleSortBy] = useState(false);
  const [sorterBy, setSorterBy] = useState(null as string | null);

  function focusInputToSearch() {
    if (dropDownlSelecctorSeachOpen === false && filterByProperty === undefined) {
      setFocusSearch(true);
    }
  }

  function clickBtnToggle() {
    setFocusSearch(!dropDownlSelecctorSeachOpen);
  }

  function clickBtnSelect(key: string) {
    return () => {
      setFilterByProperty(key);
      if (dropDownlSelecctorSeachOpen === true) {
        setFocusSearch(false);
      }
    }
  }

  function activeSorterSelection(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    setToggleSortBy(s => !s);
  }

  function activeSorterElement(b: string) {
    return () => {
      setToggleSortBy(false)
      setSorterBy(b);
    }
  }

  const placeHolderInputSearch = filterByProperty ? `Buscar por ${filterByProperty}:` : "Buscar por";

  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <ContainerSeaarch>

            <SearchSelect  handleOnChange={()=>null} />

          <ContentTable>
            <TableResultSearch>
              <thead>
                <tr>
                  <th><span>ID</span></th>
                  <th><span>Cliente</span></th>
                  <th><span>Marca</span></th>
                  <th><span>Placa</span></th>
                  <th>
                    <span className={classNames('sorter-selected', {
                      selected: toggleSortBy,
                    })}>
                      Estado
                      <button onClick={activeSorterSelection}><ArrowDropDownComponent className="Sort"></ArrowDropDownComponent></button>
                      <div className="options-selectable">
                        <div className={classNames("option", { selected: sorterBy === 'Denunciado' })}><button onClick={activeSorterElement('Denunciado')}>Denunciado</button></div>
                        <div className={classNames("option", { selected: sorterBy === 'Ingresado al taller' })}><button onClick={activeSorterElement('Ingresado al taller')}>Ingresado al taller</button></div>
                        <div className={classNames("option", { selected: sorterBy === 'Liquidación de Daños' })}><button onClick={activeSorterElement('Liquidación de Daños')}>Liquidación de Daños</button></div>
                        <div className={classNames("option", { selected: sorterBy === 'Presupuesto Revisado' })}><button onClick={activeSorterElement('Presupuesto Revisado')}>Presupuesto Revisado</button></div>
                        <div className={classNames("option", { selected: sorterBy === 'En Reparación' })}><button onClick={activeSorterElement('En Reparación')}>En Reparación</button></div>
                        <div className={classNames("option", { selected: sorterBy === 'Reparado' })}><button onClick={activeSorterElement('Reparado')}>Reparado</button></div>
                        <div className={classNames("option", { selected: sorterBy === 'Despachado' })}><button onClick={activeSorterElement('Despachado')}>Despachado</button></div>
                      </div>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map(d => (
                  <tr key={d.id}>
                    <td className="primary-color">{d.id}</td>
                    <td className="primary-color">{d.cliente}</td>
                    <td>{d.marca}</td>
                    <td>{d.place}</td>
                    <td>{d.estado}</td>
                  </tr>
                ))}
              </tbody>
            </TableResultSearch>
          </ContentTable>

        </ContainerSeaarch>

      </Container>

    </ContainerComponent>
  </>;
}
