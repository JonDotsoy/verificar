import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  padding-top: 20px;
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
    display: inline-block;
    position: relative;
    margin: auto;
    
    input.search {
      border: none;
      border-radius: 50px;
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
      top: calc(50% - 10px);
      height: 20px;
      color: white;
      right: 10px;
    }
    .toggle-list {
      position: absolute;
      z-index: 100;

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

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <ContainerSeaarch>

          <ContentSearch>
            <div className="content-search">

              <input className="search" type="search" placeholder="Buscar por" />
              <button className="btnSelect">
                <
              </button>
              <div className="toggle-list">
                <div className="item"><button>ID</button></div>
                <div className="item"><button>Cliente</button></div>
                <div className="item"><button>Marca</button></div>
                <div className="item"><button>Placa</button></div>
              </div>

            </div>
          </ContentSearch>

        </ContainerSeaarch>

      </Container>

    </ContainerComponent>
  </>;
}
