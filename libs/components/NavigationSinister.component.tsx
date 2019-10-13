import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import classnames from 'classnames';
import Link from 'next/link';
import IconPricingComponent from './icons/IconPricing.component';
import CustomerSupportComponent from './icons/CustomerSupport.component';
import Carmechanic89096Component from './icons/Carmechanic89096.component';
import GalleryComponent from './icons/Gallery.component';
import AlertHandDrawnSymbolComponent from './icons/AlertHandDrawnSymbol.component';
import InsuranceComponent from './icons/Insurance.component';
import CarOfHatchbackComponent from './icons/CarOfHatchback.component';

const ContainerButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(232, 112, 2);
  border: none;
  box-shadow: none;
  border-radius: 5px;
  padding: 10px;
  width: 100px;
  height: 100px;

  label {
    text-transform: uppercase;
    font-weight: 900;
    color: white;
  }

  &.actived {
    box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.75);
  }
`;

const ContainerButtonIcon = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
`;

export const BtnNavitagionSinister = ({ Icon = () => null, text = '{text}', href = '{href}', ...props }: {
  Icon?: FunctionComponent<any>,
  text?: string,
  href?: string,
}) => {
  const router = useRouter();

  const actived = router && router.route ? router.route.startsWith(href) : false;

  return <Link href={href}>
    <ContainerButton className={classnames({ actived })} {...props}>
      <ContainerButtonIcon>
        <Icon></Icon>
      </ContainerButtonIcon>
      <label>{text}</label>
    </ContainerButton>
  </Link>
}

export const ContainerMenuTop = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;

  ${ContainerButton} {
    margin: 0px 20px 0px 0px;
    &:last-child {
      margin: 0px;
    }
  }
`;

export default ({ ...props }) => {
  return <ContainerMenuTop {...props}>
    <BtnNavitagionSinister Icon={InsuranceComponent} text="Poliza" href="/liquidador/siniestros/poliza"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={AlertHandDrawnSymbolComponent} text="Sinistro" href="/liquidador/siniestros/sinistro"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={CarOfHatchbackComponent} text="Vehiculo" href="/liquidador/siniestros/vehiculo"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={CustomerSupportComponent} text="Trabajos" href="/liquidador/siniestros/trabajos"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={Carmechanic89096Component} text="Taller" href="/liquidador/siniestros/taller"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={IconPricingComponent} text="Presupuesto" href="/liquidador/siniestros/presupuesto"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={GalleryComponent} text="Multimedia" href="/liquidador/siniestros/multimedia"></BtnNavitagionSinister>
  </ContainerMenuTop>;
}
