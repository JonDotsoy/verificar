import NavBar from "../components/NavBar";
import ResetCSS from '../asserts/ResetCSS';
import styled, { createGlobalStyle } from "styled-components";

const Background = styled.div`
  background-image: url(/static/Vista-Gerente-Inicio-1.jpg);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100vh;
`;

export default () => {
  return <>
    <ResetCSS />

    <NavBar></NavBar>

    <Background>
    </Background>
  </>;
}
