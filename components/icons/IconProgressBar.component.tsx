import React from 'react';
import styled from "styled-components";

const Box = styled.div``;

const HeadValues = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Value = styled.div`
  color: #7f7f7f;
  padding: 0px 20px 5px 20px;
  font-size: 20px;
`;

const sizeHProgressBar = 25;

const ProgressContent = styled.div`
  background: red;
  height: ${sizeHProgressBar}px;
  position:relative;
`;

const ProgressBar = styled.span`
  height: ${sizeHProgressBar}px;
  display: inline-block;
  background-color: blue;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export default ({
  valueLeft = 0,
  valueRigth = 100,
  progressValue = 20,
}) => <Box>
    <HeadValues>
      <Value>{valueLeft}</Value>
      <Value>{valueRigth}</Value>
    </HeadValues>

    <ProgressContent>
      <ProgressBar style={{ width: `${progressValue}%` }}></ProgressBar>
    </ProgressContent>
  </Box>