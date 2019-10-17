import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./nav";
import List from "./list";
import PerfilLiquidador from "./perfilLiquidador";
import Taller from "./taller";
import Siniestro from "./siniestro";

export default () => {
  const [mainSection, setMainSection] = useState(true);
  const [section, setSection] = useState("liquidador");
  const handleMainSection = (condition: boolean) => setMainSection(condition);
  const handleSection = (sectionName: string) => setSection(sectionName);

  const conditionRender = () => {
    switch (section) {
      case "liquidador":
        return <PerfilLiquidador />;
      case "poliza":
        return null;
      case "siniestro":
        return <Siniestro />;
      case "vehículos":
        return null;
      case "trabajos":
        return null;
      case "taller":
        return <Taller />;
      case "presupuesto":
        return null;
      case "multimedia":
        return null;
      default:
        return null;
    }
  }
  return (
    <>
      {
        mainSection ?
          <BoxMain>
            <List handleMainSection={handleMainSection} />
          </BoxMain>

          :
          <ContainerViews>
            <Nav handleSection={handleSection} />
            {conditionRender()}
          </ContainerViews>

      }
    </>
  )
}


const BoxMain = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
`;

const ContainerViews = styled.div`
  width:80%;
  margin: 25px auto;
  @media (max-width: 768px) {
    width:100%;
  }
`;