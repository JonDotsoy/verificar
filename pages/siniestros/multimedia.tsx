import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../components/NavigationSinister.component';
import { TitlePresupuesto } from '../../components/TitlePresupuesto';
import BaselineUnfoldMoreComponent from '../../components/icons/BaselineUnfoldMore.component';
import BaselineUnfoldLessComponent from '../../components/icons/BaselineUnfoldLess.component';
import BaselineArrowBackIosComponent from '../../components/icons/BaselineArrowBackIos.component';
import BaselineArrowForwardIosComponent from '../../components/icons/BaselineArrowForwardIos.component';

const Container = styled.div`
  flex-grow: 1;
`;

const GalleryBody = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  padding: 0px 20px;

  .header-toggle {
    background-color: rgb(116,116,117);
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    height: 40px;
    margin-bottom: 5px;

    .title {
      padding-left: 30px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        color: white;
        font-size: 25px;
        text-transform: uppercase;
      }
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        --w: 30px;
        width: var(--w);
        height: var(--w);
      }
    }
  }

  .color-style-yellow {
    background-color: rgb(228, 194, 1);
  }

  .color-style-orange {
    background-color: rgb(232, 112, 2);
  }

  .gallery-content {
    svg {
      fill: black;
      &.revert {
        transform: rotate(180deg);
      }
    }
  }
`;

const HeaderToggle = ({ title = '{title}', color = 'default', typeIcon = 'more' as 'more' | 'less' }) =>
  <div className={`header-toggle color-style-${color}`}>
    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className="icon">
      {typeIcon === 'more' && <BaselineUnfoldMoreComponent></BaselineUnfoldMoreComponent>}
      {typeIcon === 'less' && <BaselineUnfoldLessComponent></BaselineUnfoldLessComponent>}
    </div>
  </div>

const ContentGallery = () => 
  <div className="gallery-content">
    <BaselineArrowBackIosComponent></BaselineArrowBackIosComponent>
    <BaselineArrowBackIosComponent className="revert"></BaselineArrowBackIosComponent>
  </div>

export default () => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <NavigationSinisterComponent></NavigationSinisterComponent>

        <TitlePresupuesto><h1>MG 360 JF7H20</h1></TitlePresupuesto>

        <GalleryBody>

          <HeaderToggle color="default" title="Fotos Inspeccción"></HeaderToggle>
          <HeaderToggle color="orange" title="Fotos Siniestros"></HeaderToggle>
          <HeaderToggle color="default" title="Fotos Ingreso Taller" typeIcon={"less"}></HeaderToggle>
          <ContentGallery></ContentGallery>
          <HeaderToggle color="yellow" title="Fotos Reparación" typeIcon="less"></HeaderToggle>

        </GalleryBody>

      </Container>
    </ContainerComponent>
  </>
};
