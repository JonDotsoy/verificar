import React, { useState, useRef } from "react";
import styled from 'styled-components';
import classNames from 'classnames';
import ArrowDropDownComponent from '../icons/ArrowDropDown.component';

interface PropsComp {
  handleOnChange?(val?: any): void;
  value?: string;
  options: string[];
}

export default ({ options }: PropsComp) => {
  const [dropDownlSelecctorSeachOpen, setFocusSearch] = useState(false);
  const [filterByProperty, setFilterByProperty] = useState(undefined as string | undefined);
  const inputSearch = useRef<HTMLInputElement>(null);
  const placeHolderInputSearch = filterByProperty ? `Buscar por ${filterByProperty}:` : "Buscar por";

  function clickBtnToggle() {
    setFocusSearch(!dropDownlSelecctorSeachOpen);
  }
  function focusInputToSearch() {
    if (dropDownlSelecctorSeachOpen === false && filterByProperty === undefined) {
      setFocusSearch(true);
    }
  }
  function clickBtnSelect(key: string) {
    return () => {
      setFilterByProperty(key);
      if (dropDownlSelecctorSeachOpen === true) {
        setFocusSearch(false);
      }
    }
  }
  return (

    <ContentSearch>
      <div className={classNames('content-search', { 'filter-selected': filterByProperty })}>

        <label htmlFor={inputSearch.current ? inputSearch.current.id : undefined}><span>{filterByProperty}</span></label>
        <input id="input-search" ref={inputSearch} className="search" type="text" data-filter-prop={filterByProperty} placeholder={placeHolderInputSearch} onFocus={focusInputToSearch} />
        <button onClick={clickBtnToggle} className="btnSelect"><ArrowDropDownComponent className={classNames({ revert: dropDownlSelecctorSeachOpen })}></ArrowDropDownComponent></button>
        <div className={classNames("toggle-list", { visible: dropDownlSelecctorSeachOpen })}>
          {
            options.map((item, index) =>
              <div key={index} onClick={clickBtnSelect(item)} className="item">
                <button>
                  {item}
                </button>
              </div>

            )
          }
        </div>

      </div>
    </ContentSearch>

  )
}




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

/*
<div onClick={clickBtnSelect('ID')} className="item"><button>ID</button></div>
          <div onClick={clickBtnSelect('Cliente')} className="item"><button>Liquidador</button></div>
          <div onClick={clickBtnSelect('Marca')} className="item"><button>Marca</button></div>
          <div onClick={clickBtnSelect('Placa')} className="item"><button>Placa</button></div>
          */