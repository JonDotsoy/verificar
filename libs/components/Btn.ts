import styled from "styled-components";

interface Props {
  colorRol?: 'orange' | 'orange-light' | 'red';
}

export default styled.button`
  border: none;
  color: white;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 20px;
  text-transform: uppercase;
  margin-right: 10px;
  &:hover, &.actived {
    box-shadow: 0px 0px 0px 5px black;
  }
  &, &.bg-orange {
    background-color: rgb(250, 127, 1);
  }
  &.bg-orange-light {
    background-color: rgb(251, 156, 6);
  }
  &.bg-red {
    background-color: rgb(209, 8, 7);
  }
  &.bg-yellow {
    background-color: rgb(229, 195, 0);
  }
`;
