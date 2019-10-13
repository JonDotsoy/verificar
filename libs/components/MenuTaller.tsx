import React from 'react';
import { ContainerMenuTop, BtnNavitagionSinister } from "./NavigationSinister.component";
import AlertHandDrawnSymbolComponent from "./icons/AlertHandDrawnSymbol.component";
import Carmechanic89096Component from "./icons/Carmechanic89096.component";
import IconPricingComponent from "./icons/IconPricing.component";

export const MenuTaller = ({
  className = undefined as string | undefined,
}) => {
  return <ContainerMenuTop className={className}>
    <BtnNavitagionSinister Icon={AlertHandDrawnSymbolComponent} text="Sinistro" href="/liquidador/talleres/taller/sinistro"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={Carmechanic89096Component} text="Taller" href="/liquidador/talleres/taller/taller"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={IconPricingComponent} text="Presupuesto" href="/liquidador/talleres/taller/presupuesto"></BtnNavitagionSinister>
  </ContainerMenuTop>;
}
