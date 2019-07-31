import React from 'react';
import styled from 'styled-components';
import BaselineKeyboardArrowLeftComponent from '../icons/BaselineKeyboardArrowLeft.component';
import BaselineKeyboardArrowRightComponent from '../icons/BaselineKeyboardArrowRight.component';
import BaselineShareComponent from '../icons/BaselineShare.component';

const Container = styled.div`
  display: block;
  width: 100%;
  font-family: 'Source Sans Pro', sans-serif;
`;

const SinisterHeader = styled.div`
  display: flex;
  border-radius: 100px;
  background-color: #9a9997;
  flex-direction: row;
  padding: 5px 10px;
  box-sizing: border-box;
  width: 100%;
`;

const SinisterHeaderTitle = styled.div`
  display: inline-flex;
  color: #334952;
  align-items: center;
  align-self: center;
  font-size: 20px;
`;

const iconSize = '30px';

const Ileft = styled(BaselineKeyboardArrowLeftComponent)`
  width: ${iconSize};
  height: ${iconSize};
  fill: white;
`

const Irigth = styled(BaselineKeyboardArrowRightComponent)`
  width: ${iconSize};
  height: ${iconSize};
  fill: white;
`;

const IShare = styled(BaselineShareComponent)`
  fill: #9a9997;
  background-color: #ffef39;
  padding: 4px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-left: 10px;
`

const BtnShareContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const DivGrid = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ({
  sinisterId = '{{Sinister ID}}',
  ...props
}) =>
  <Container {...props}>
    <SinisterHeader>
      <div></div>
      <DivGrid>
        <SinisterHeaderTitle><Ileft></Ileft> SINIESTRO {sinisterId} <Irigth></Irigth></SinisterHeaderTitle>
      </DivGrid>
      <div>
        <BtnShareContent>
          Compartir
          <IShare></IShare>
        </BtnShareContent>
      </div>
    </SinisterHeader>
  </Container>