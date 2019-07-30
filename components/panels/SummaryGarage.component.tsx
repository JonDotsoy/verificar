import React from 'react';
import styled from 'styled-components';
import { Cell } from '../grid';
import { PanelContainer, PanelHeader, PanelBody } from '../Panel';

const ItemDescriptionTaller = styled.div`
  // holas
  
`;

export default () =>
  <PanelContainer>
    <PanelHeader>
      <h1>Estado resumen según taller</h1>
      <h2>Estado trabajos taller</h2>
    </PanelHeader>

    <PanelBody>

      <ItemDescriptionTaller></ItemDescriptionTaller>
      
    </PanelBody>
  </PanelContainer>
