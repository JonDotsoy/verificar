import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import classnames from 'classnames';
import Link from 'next/link';
import IconPricingComponent from './icons/IconPricing.component';

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

const BtnNavitagionSinister = ({ Icon = () => null, text = '{text}', href = '{href}', ...props }) => {
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

const ContainerMenuTop = styled.div`
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
    <BtnNavitagionSinister text="Poliza" href="/siniestros/poliza"></BtnNavitagionSinister>
    <BtnNavitagionSinister text="Sinistro" href="/siniestros/sinistro"></BtnNavitagionSinister>
    <BtnNavitagionSinister text="Vehiculo" href="/siniestros/vehiculo"></BtnNavitagionSinister>
    <BtnNavitagionSinister text="Trabajos" href="/siniestros/trabajos"></BtnNavitagionSinister>
    <BtnNavitagionSinister text="Taller" href="/siniestros/taller"></BtnNavitagionSinister>
    <BtnNavitagionSinister Icon={IconPricingComponent} text="Presupuesto" href="/siniestros/presupuesto"></BtnNavitagionSinister>
    <BtnNavitagionSinister text="Multimedia" href="/siniestros/multimedia"></BtnNavitagionSinister>
  </ContainerMenuTop>;
}
