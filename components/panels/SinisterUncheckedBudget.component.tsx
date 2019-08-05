import React from 'react';
import { PanelRContainer, PanelRHeader, PanelRBody } from '../PanelR';

export default ({
  ...props
}) =>
  <PanelRContainer {...props}>
    <PanelRHeader title={'Presupuesto sin revisar'}></PanelRHeader>
    <PanelRBody>

    </PanelRBody>
  </PanelRContainer>
