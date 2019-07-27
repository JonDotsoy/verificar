import styled from "styled-components";
import ItemMenuComponent from "./ItemMenu.component";

const Container = styled.div`
  background-color: black;
  display: inline-block;
  min-width: 330px;
  padding: 20px 0px;
`;

export default () =>
  <Container>
    <ItemMenuComponent title="Inicio" actived={true}/>
    <ItemMenuComponent title="Siniestros"/>
    <ItemMenuComponent title="Liquidadores"/>
    <ItemMenuComponent title="Talleres"/>
    <ItemMenuComponent title="Presupuesto"/>
  </Container>
