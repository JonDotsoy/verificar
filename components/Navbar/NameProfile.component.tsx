import React from 'react';
import styled from 'styled-components';
import BaselineExpandMore from '../icons/BaselineExpandMore.component';

const NameProfile = styled.div`
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
  font-weight: 300;
  font-size: 27px;
  text-align: center;
  align-self: center;
`;

export default () => <>
  <NameProfile>Juan<br />Gerente</NameProfile>
  <BaselineExpandMore></BaselineExpandMore>
</>
