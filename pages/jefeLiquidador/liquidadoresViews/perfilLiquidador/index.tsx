import React from "react";
import LayoutViews from "../../../../libs/components/layoutViews";
import NavViews from "../../../../libs/components/navViews";
import navData from "../../../../libs/jefeLiquidadorLiquidadoresViewsNavData";
import PerfilLiquidador from "../../../../libs/components/perfilLiquidador";

export default () => {
    return (

        <LayoutViews user="jefe">
           <NavViews data={navData} classCss={"max-width:350px;margin:10px auto 15px auto;"} />
    
                <PerfilLiquidador info={info} />
         
        </LayoutViews>
    )
}


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
