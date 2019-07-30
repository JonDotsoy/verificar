import React from 'react';
import styled from 'styled-components';
import { PanelContainer, PanelHeader, PanelBody } from '../Panel';
import { SECONDARY_COLOR } from '../constant';

const ContenetItemDescriptionTaller = styled.div`
  border-bottom: 1px solid rgb(233, 233, 233);
  padding: 20px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 20px;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 17px;
    color: ${SECONDARY_COLOR}
  }

  > div {
    padding: 0px 5px;
    &:first-child {
      flex: 1;
      padding-left: 0px;
    }
    &:last-child {
      padding-right: 0px;
    }
  }
`;

const BotonInfo = styled.div`${({ color = 'red' }) => `
  background-color: ${color};
  padding: 10px 10px;
  border-radius: 15px;
  min-width: 40px;
  text-align: center;
`}`;

const ItemDescriptionTaller = ({
  title = '{{title}}',
  subTitle = '{{sub-title}}',
  greenValue = 10,
  yellowValue = 10,
  redValue = 10,
}) => <ContenetItemDescriptionTaller>
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
    <div><BotonInfo color={'#29c729'}>{greenValue}</BotonInfo></div>
    <div><BotonInfo color={'#f9f95f'}>{yellowValue}</BotonInfo></div>
    <div><BotonInfo color={'#ff6868'}>{redValue}</BotonInfo></div>
  </ContenetItemDescriptionTaller>

export default () =>
  <PanelContainer>
    <PanelHeader>
      <h1>Estado resumen según taller</h1>
      <h2>Estado trabajos taller</h2>
    </PanelHeader>

    <PanelBody>

      <ItemDescriptionTaller title={'Taller sin Golpes'} subTitle={'30 Vehículos'} greenValue={20} yellowValue={10} redValue={10}/>
      <ItemDescriptionTaller title={'Taller Ratoncito'} subTitle={'76 Vehículos'} greenValue={30} yellowValue={10} redValue={36}/>
      <ItemDescriptionTaller title={'Taller La Rueda'} subTitle={'12 Vehículos'} greenValue={6} yellowValue={4} redValue={2}/>
      <ItemDescriptionTaller title={'Taller Pulento'} subTitle={'91 Vehículos'} greenValue={36} yellowValue={40} redValue={15}/>

    </PanelBody>
  </PanelContainer>
