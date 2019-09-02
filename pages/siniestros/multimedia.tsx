import React, { ReactPropTypes, FunctionComponentElement, FunctionComponent, ReactElement, ReactSVGElement } from 'react';
import NavBarComponent from '../../components/Navbar/NavBar.component';
import ContainerComponent from '../../components/Container';
import MenuNavComponent from "../../components/MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../components/NavigationSinister.component';
import { TitlePresupuesto } from '../../components/TitlePresupuesto';
import BaselineUnfoldMoreComponent from '../../components/icons/BaselineUnfoldMore.component';
import BaselineUnfoldLessComponent from '../../components/icons/BaselineUnfoldLess.component';
import BaselineArrowBackIosComponent from '../../components/icons/BaselineArrowBackIos.component';
import Head from 'next/head';
import { isArray, isObject } from 'util';
import Link from 'next/link';

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
    display: flex;
    width: calc(100vw - 300px);
    padding: 10px 40px;
    box-sizing: border-box;
    align-items: center;

    svg {
      --w: 60px;
      fill: rgb(231, 113, 3);
      width: var(--w);
      height: var(--w);
    }

    .contnet-photos {
      white-space: nowrap;
      flex: 1;
      overflow: auto;
      max-width: 100%;
      position: relative;
      box-sizing: border-box;
      width: auto;

      img {
        margin: 0px 10px;
        height: 150px;
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

const filterNodeImg = (e: React.ReactNode) => {
  const nodes = ([] as React.ReactNode[]).concat(e)
    .map((node) => {
      if (React.isValidElement<HTMLImageElement>(node) && node.type === 'img') {
        return node;
      }
    })
    .filter(Boolean);

  return nodes as React.ReactElement<HTMLImageElement>[];
}

const ContentGallery: FunctionComponent<{}> = ({ children }) => {
  const nodes = filterNodeImg(children);

  return <div className="gallery-content">
    <Head>
      {
        nodes.map(node =>
          <link key={`link-${node.props.src}`} as="image" href={node.props.src} rel="prefetch"></link>
        )
      }
    </Head>

    <BaselineArrowBackIosComponent></BaselineArrowBackIosComponent>
    <div className="contnet-photos">
      {nodes}
    </div>
    <BaselineArrowBackIosComponent className="revert"></BaselineArrowBackIosComponent>
  </div>
}

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
          <ContentGallery>
            <img src="https://loremflickr.com/320/240/car?lock=1" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=2" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=3" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=4" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=5" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=6" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=7" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=8" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=9" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=10s" alt="" />
          </ContentGallery>
          <HeaderToggle color="yellow" title="Fotos Reparación" typeIcon="less"></HeaderToggle>

          <ContentGallery>
            <img src="https://loremflickr.com/320/240/car?lock=10" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=11" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=12" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=13" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=14" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=15" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=16" alt="" />
            <img src="https://loremflickr.com/320/240/car?lock=17" alt="" />
          </ContentGallery>

        </GalleryBody>

      </Container>
    </ContainerComponent>
  </>
};
