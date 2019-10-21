import React from "react";
import styled from "styled-components";
import LayoutViews from "../../../../libs/components/layoutViews";
import NavViews from "../../../../libs/components/navViews";
import navData from "../../../../libs/jefeLiquidadorSiniestrosViewsNavData";
import PerfilLiquidador from "../../../../libs/components/perfilLiquidador";

export default () => {
    return (

        <LayoutViews user="jefe">
            <DirectionCenter>
                <NavViews data={navData} />
                <PerfilLiquidador info={info} />
            </DirectionCenter>
        </LayoutViews>

    )
}

const DirectionCenter = styled.div`
    width:90%;
    margin:12px auto;
    @media(max-width:780px){
      width:100%;
    }
`;

const info = {
    name: "juan jose araneda",
    avatar: "https://i.ibb.co/ZY42zr4/user-photo.jpg",
    correo: "juanjose.a@seguros.cl",
    telefono: "56 9 9740999",
    tiempoPPrp: 5,
    satisfaccion: "Muy bueno",
    sCerrados: 125,
    sActuales: 50,
    pSinRevisar: 5,
    pEnReparacion: 44
}
