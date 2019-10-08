import React from 'react';
import styled from "styled-components";

const Avatar = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default ({
  avatarUri = 'https://i.pravatar.cc/300?u=1',
}) =>
  <Avatar
    style={{
      backgroundImage: `url('${avatarUri}')`,
    }}
  ></Avatar>
