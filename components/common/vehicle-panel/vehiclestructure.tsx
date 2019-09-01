import React, { FunctionComponent } from 'react';
import ContainerComponent from '../../Container';
import MenuNavComponent from "../../MenuLateral/ContainerMenuLateral.component";
import styled from 'styled-components';
import NavBarComponent from '../../Navbar/NavBar.component';
import NavigationSinisterComponent from '../../NavigationSinister.component';
import { TitlePresupuesto } from '../../TitlePresupuesto';
import classNames from 'classnames';

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

const filterDetailElm = (idFind: string, children: React.ReactNode) => {
  const els = ([] as React.ReactNode[]).concat(children);

  return els.find(el => {
    if (React.isValidElement<HTMLDivElement>(el)) {
      if (el.props.id === idFind) {
        return true;
      }
    }
  });
}

const GalleryComp: FunctionComponent<{ label: string, className?: string }> = ({ label, className, children }) => {
  const images = ([] as React.ReactNode[]).concat(children)
    .map(el => {
      if (React.isValidElement(el) && el.type === 'img') {
        return el as React.ReactElement<HTMLImageElement>;
      }
    })
    .filter(Boolean) as React.ReactElement<HTMLImageElement>[];

  return <div className={classNames('content-images', className)}>
    <div className="label">{label}</div>
    <div className="gallery">
      <button type="button"></button>
      <button type="button"></button>
      <div className="images">
        {images.map((img, i) =>
          <div key={i} className="img" style={{
            backgroundImage: `url(${JSON.stringify(img.props.src)})`,
          }}></div>
        )}
      </div>
    </div>
  </div>
}

const comp: FunctionComponent<{}> = ({ children }) => {
  return <>
    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <NavigationSinisterComponent></NavigationSinisterComponent>

        <TitlePresupuesto><h1>{filterDetailElm('title', children)}</h1></TitlePresupuesto>

        <ContentVehiculoDetail>

          <div className="panel panel-detail">

            {filterDetailElm('detail', children)}

          </div>

          <div className="panel images">

            <GalleryComp label="Sinisetro" className="sinisetro">
              <img src="http://2.bp.blogspot.com/-uhmYS2q92ng/Unvvbwg9-0I/AAAAAAAAAJE/M5wodYPJ3qo/s1600/AUTO.png"></img>
            </GalleryComp>

            <GalleryComp label="Sinisetro" className="inspect">
              <img src="https://loremflickr.com/320/240/car?lock=17"></img>
            </GalleryComp>

          </div>

        </ContentVehiculoDetail>

      </Container>
    </ContainerComponent>
  </>
};

export default comp;
