import React, { useState, useEffect, useRef } from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import ArrowDropDownComponent from '../../components/icons/ArrowDropDown.component';
import classNames from 'classnames';
import { S } from '../../utils/S';

const Container = styled.div`
  flex-grow: 1;
  padding-top: 20px;
  font-family: "Source Sans Pro", sans-serif;
`;

const ContainerSeaarch = styled.div`
  height: 400px;
  max-width: 900px;
  margin: auto;
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

const dataTable = S({
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

  const placeHolderInputSearch = filterByProperty ? `Buscar por ${filterByProperty}:` : "Buscar por";

  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <ContainerSeaarch>

          <ContentSearch>
            <div className={classNames('content-search', { 'filter-selected': filterByProperty })}>

              <label htmlFor={inputSearch.current ? inputSearch.current.id : undefined}><span>{filterByProperty}</span></label>
              <input id="input-search" ref={inputSearch} className="search" type="text" data-filter-prop={filterByProperty} placeholder={placeHolderInputSearch} onFocus={focusInputToSearch} />
              <button onClick={clickBtnToggle} className="btnSelect"><ArrowDropDownComponent className={classNames({ revert: dropDownlSelecctorSeachOpen })}></ArrowDropDownComponent></button>
              <div className={classNames("toggle-list", { visible: dropDownlSelecctorSeachOpen })}>
                <div onClick={clickBtnSelect('ID')} className="item"><button>ID</button></div>
                <div onClick={clickBtnSelect('Cliente')} className="item"><button>Cliente</button></div>
                <div onClick={clickBtnSelect('Marca')} className="item"><button>Marca</button></div>
                <div onClick={clickBtnSelect('Placa')} className="item"><button>Placa</button></div>
              </div>

            </div>
          </ContentSearch>

          <ContentTable>
            <TableResultSearch>
              <thead>
                <tr>
                  <th><span>ID</span></th>
                  <th><span>Cliente</span></th>
                  <th><span>Marca</span></th>
                  <th><span>Placa</span></th>
                  <th><span>Estado <ArrowDropDownComponent className="Sort"></ArrowDropDownComponent></span></th>
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
