import React, { useState } from 'react';
import NavBarComponent from '../../../libs/components/Navbar/NavBarLiquidador.component';
import ContainerComponent from '../../../libs/components/Container';
import MenuNavComponent from "../../../libs/components/MenuLateral/ContainerMenuLateralLiquidador.component";
import styled from 'styled-components';
import NavigationSinisterComponent from '../../../libs/components/NavigationSinister.component';
import { TitlePresupuesto } from '../../../libs/components/TitlePresupuesto';
import CarOfHatchbackComponent from '../../../libs/components/icons/CarOfHatchback.component';
import Modal from '../../../libs/components/modal';
import CloseIcon from '../../../libs/components/icons/CloseIcon';

const Container = styled.div`
  flex-grow: 1;
`;

const ButtonShowDetaill = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: rgb(148, 148, 147);
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 20px;
    font-family: "Source Sans Pro", sans-serif;
    box-shadow: 0px 4px 3px 0px #7979792e;
    color: white;
    margin-bottom: 20px;
    border: solid 1px #7979792e;
  }
`;

const TimeLineCarReparting = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  background-color: rgb(227, 228, 229);
  border: solid 1px rgb(189, 190, 191);
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: start;

  .sectionend {
    padding: 20px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      --w: 80px;
      fill: rgb(246, 119, 2);
      width: var(--w);
      height: var(--w);
    }

    .dialog {
      max-width: 100px;
      text-align: center;
      background-color: rgb(148, 148, 147);
      padding: 10px;
      border-radius: 5px;
      color: white;
    }
  }

  .sectiontimeline {
    min-width: 100px;
    padding: 20px 0px;
    box-sizing: border-box;

    .photo-car {
      position: relative;
      border-radius: 5px;
      padding: 10px;
      background-color: rgb(232, 112, 2);
      img {
        border-radius: 2px;
        max-width: 200px;
      }
      figcaption {
        color: white;
        padding: 10px;
        background-color: rgb(232, 112, 2);
        position: absolute;
        bottom: 0px;
        right: 0px;
        border-radius: 5px;
        max-width: 150px;
      }
    }

    .label {
      text-align: center;
      margin-bottom: 10px;
      height: 20px;
      color: rgb(232, 114, 1);
    }

    .descpt {
      text-align: center;
    }

    .point {
      position: relative;
      height: 20px;
      margin-bottom: 20px;
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: white;
        left: 50%;
        margin-left: -10px;
        box-shadow: 0 0 0 2px rgb(54,175,167);
      }
      &:before {
        content: '';
        position: absolute;
        display: block;
        height: 10px;
        background-color: rgb(151, 206, 201);
        width: 100%;
        margin-top: 5px;
      }
    }

    &.lineactive .point {
      &:before {
        background-color: rgb(54, 175, 167);
      }
    }

    &.focus {
      .point {
        &:after {
          box-shadow: 0 0 0 2px rgb(54,175,167), 0 0 0 8px rgb(232, 114, 1);
        }
        &:before {
          background: linear-gradient(to left, rgb(151, 206, 201) 50%, rgb(54, 175, 167) 50%);
          ;
        }
      }
    }

    &.first {
      .point {
        &:before {
          width: 50%;
          left: 50%;
        }
      }
    }

    &.last {
      .point {
        &:before {
          width: 50%;
          left: 0%;
        }
      }
    }
  }
`;

const BlockPendingTask = styled.div({
  backgroundColor: `rgb(234, 113, 0)`,
  padding: '30px 20px',
  position: 'relative',
  boxShadow: Array(4)
    .fill(0)
    .map((_, i) => `0px ${(i + 1) * 2}px ${(i + 1) * 2}px rgba(0, 0, 0, ${(((i + 1) * 4) / 100)})`)
    .join(', '),
  '.btn-close': {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    margin: 0,
    right: 10,
    top: 10,
    position: 'absolute',
    '> svg': {
      '--w': 20,
      width: 'var(--w)',
      height: 'var(--w)',
    },
  },
  '.grid-content': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr 1fr',
    color: 'white',
    '.row': {
      display: 'contents',
      "&:last-child": {
        marginBottom: 0,
      },
      '&.ghead > div': {
        paddingBottom: 20,
      },
      '&.dt': {
        '> div': {
          backgroundColor: 'rgb(237,148,68)',
          padding: '10px 20px',
          marginBottom: 20,
          "&:first-child": {
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          },
          "&:last-child": {
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          }
        },
      },
      '&.control': {
        '> div': {
          gridColumnStart: 1,
          gridColumnEnd: 4,
        },
        justifyItems: 'start',
        'button': {
          backgroundColor: 'rgb(237,148,68)',
          border: 'none',
          color: 'rgb(255, 255, 255)',
          padding: '10px 40px',
          borderRadius: 30,
          fontSize: '0.9rem',
        }
      },
    },
  },
});

export default () => {
  const [modalDetal, setModalDetail] = useState(false);

  return <>
    {
      modalDetal &&
      <Modal backgroundColor="transparent">
        <BlockPendingTask>
          <button className="btn-close" type="button" onClick={() => setModalDetail(false)}><CloseIcon /></button>
          <div className="grid-content">
            <div className="row ghead">
              <div>Descripción</div>
              <div>R/C</div>
              <div>HRS</div>
            </div>
            <div className="row dt">
              <div>Puerta derecha</div>
              <div>Rep</div>
              <div>6</div>
            </div>
            <div className="row dt">
              <div>Foco Delantero</div>
              <div>Cambio</div>
              <div>6</div>
            </div>
            <div className="row dt">
              <div>Parabrisa</div>
              <div>Cambio</div>
              <div>6</div>
            </div>
            <div className="row control">
              <div>
                <button type="button" onClick={() => setModalDetail(false)}>Volver</button>
              </div>
            </div>
          </div>
        </BlockPendingTask>
      </Modal>
    }

    <NavBarComponent></NavBarComponent>

    <ContainerComponent>

      <MenuNavComponent></MenuNavComponent>

      <Container>

        <NavigationSinisterComponent></NavigationSinisterComponent>

        <TitlePresupuesto><h1>Seguimiento Reparación</h1></TitlePresupuesto>

        <TimeLineCarReparting>

          <div className="sectiontimeline first lineactive">
            <div className="label">Ingreso</div>
            <div className="point"></div>
            <div className="descpt">5 de Agosto</div>
          </div>
          <div className="sectiontimeline lineactive">
            <div className="label">XXXXX</div>
            <div className="point"></div>
            <div className="descpt">8 de Agosto</div>
          </div>
          <div className="sectiontimeline lineactive">
            <div className="label">YYYYY</div>
            <div className="point"></div>
            <div className="descpt">15 de Agosto</div>
          </div>
          <div className="sectiontimeline focus">
            <div className="label"></div>
            <div className="point"></div>
            <figure className="photo-car">
              <img src="https://img.autocosmos.com/noticias/fotos/extralarge/NAZ_42b849e4125c47729c702a4963a158e6.jpg"></img>
              <figcaption>YYYYYYYYYY XXXXX XXXXX</figcaption>
            </figure>
          </div>
          <div className="sectiontimeline">
            <div className="label"></div>
            <div className="point"></div>
          </div>
          <div className="sectiontimeline last">
            <div className="label"></div>
            <div className="point"></div>
          </div>
          <div className="sectionend">
            <CarOfHatchbackComponent></CarOfHatchbackComponent>
            <div className="dialog">
              Entrega estimada 2 de septiembre
            </div>
          </div>

        </TimeLineCarReparting>


        <ButtonShowDetaill>
          <button type="button" onClick={() => setModalDetail(true)}>Ver Pendientes</button>
        </ButtonShowDetaill>


      </Container>
    </ContainerComponent>
  </>
};
