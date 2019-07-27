
import styled from "styled-components";
import NavBarComponent from '../components/Navbar/NavBar.component';
import ContainerComponent from '../components/Container.component';
import Head from 'next/head';
import ResetCSS from "../asserts/ResetCSS";
import MenuNavComponent from "../components/MenuLateral/ContainerMenuLateral.component";

const Background = styled.div`
  background-image: url('/static/Vista-Gerente-Inicio-1.jpg');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center -100px;
  height: 100vh;
`;

export default () => {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:600&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: ResetCSS }}></style>
    </Head>

    <NavBarComponent></NavBarComponent>

    <ContainerComponent>
      <MenuNavComponent></MenuNavComponent>
    </ContainerComponent>

    <Background />
  </>;
}
