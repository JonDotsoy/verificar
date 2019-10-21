
import WarningIcon from "./components/icons/AlertHandDrawnSymbol.component";
import PresuIcon from "./components/icons/FoldedNewspaper.component";
import UserIcon from "./components/icons/BaselineFace24px.component";

export default [
    {
        url: "/jefeLiquidador/liquidadoresViews/perfilLiquidador",
        icon: <UserIcon />,
        txt: "liquidador",

    },
    {
        url: "/jefeLiquidador/liquidadoresViews/siniestro",
        icon: <WarningIcon />,
        txt: "siniestro",

    },
    {
        url: "/jefeLiquidador/liquidadoresViews/presupuestos",
        icon: <PresuIcon />,
        txt: "presupuesto",

    }
  ]
