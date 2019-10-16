import React, { useState } from "react";
import styled from "styled-components";

import ListLiquidadores from "./list";
import SiniestroLiquidador from "./siniestro";
import PresupuestoLiquidador from "./presupuestos";
import LiquidadorDetail from "./liquidadorDetail";
import Nav from "./nav";

export default () => {
    const [mainSection, setMainSection] = useState(true);
    const [sectionView, setSectionView] = useState("liquidadorDetail");

    const hideMainSection = () => setMainSection(false);

    const showListLiquidadores = () => setSectionView("liquidadorDetail");
    const showSiniestroLiquidador = () => setSectionView("siniestroLiquidador");
    const showPresupuestoLiquidador = () => setSectionView("presupuestoLiquidador");

    const handleRenderViews = () => {
        switch (sectionView) {
            case "liquidadorDetail":
                return <LiquidadorDetail />

            case "siniestroLiquidador":
                return <SiniestroLiquidador />

                
            case "presupuestoLiquidador":
                return <PresupuestoLiquidador  />

               
            default:
                return null;
        }
    }
    return (
        <>
            {
                mainSection ?
                    <ListLiquidadores hideMainSection={hideMainSection} />
                    :
                    <ContainerViews>
                        <Nav
                            showListLiquidadores={showListLiquidadores}
                            showSiniestroLiquidador={showSiniestroLiquidador}
                            showPresupuestoLiquidador={showPresupuestoLiquidador}
                        />
                        {
                            handleRenderViews()
                        }
                    </ContainerViews>

            }
        </>
    )
}


const ContainerViews = styled.div`
  width:80%;
  margin: 25px auto;
  @media (max-width: 768px) {
    width:100%;
  }
`;