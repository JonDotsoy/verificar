import React, { useState } from "react";
import ListLiquidadores from "./list";
import SiniestroLiquidador from "./siniestro";
import PresupuestoLiquidador from "./presupuestos";


export default () => {
    const [sectionView, setSectionView] = useState("listLiquidadores");
    const listLiquidadores = () => setSectionView("listLiquidadores");
    const showSiniestroLiquidador = () => setSectionView("siniestroLiquidador");
    const showPresupuestoLiquidador = () => setSectionView("presupuestoLiquidador");

    const handleRenderViews = () => {
        switch (sectionView) {
            case "listLiquidadores":
                return <ListLiquidadores
                    showSiniestroLiquidador={showSiniestroLiquidador}
                />
            case "siniestroLiquidador":
                return <SiniestroLiquidador
                    listLiquidadores={listLiquidadores}
                    showPresupuestoLiquidador={showPresupuestoLiquidador}
                />
            case "presupuestoLiquidador":
                return <PresupuestoLiquidador
                    listLiquidadores={listLiquidadores}
                    showSiniestroLiquidador={showSiniestroLiquidador}
                />
            default:
                return null;
        }
    }
    return (
        <>
            {handleRenderViews()}
        </>
    )
}