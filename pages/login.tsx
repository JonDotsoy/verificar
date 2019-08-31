import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const widthPanel = 400;

const LoginStyled = styled.div`
  --width-login-container: ${widthPanel}px;

  font-family: "Source Sans Pro", sans-serif;

  .block-login {
    display: block;
    max-width: var(--width-login-container);
    margin: 100px auto;
    position: relative;
    padding-bottom: 30px;

    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
      bottom: 0px;
    }
  }

  header {
    .banner {
      .brand {
        h1 {
          display: none;
        }

        height: 92px;
        background-repeat: no-repeat;
        background-size: 106px 92px;
        background-position: center center;
        background-image: url('/static/logo.png');
        margin: 30px 0px;
        position: relative;
        
        &:before, &:after {
          content: '';
          background-color: black;
          width: calc( ( (var(--width-login-container) - 106px ) / 2) - 10px );
          height: 2px;
          display: block;
          position: absolute;
          left: 0px;
          top: 50%;
          
          @media (max-width: ${widthPanel}px) {
            width: calc( ( (100vw - 106px ) / 2) - 10px );
          }
        }

        &:after {
          left: initial;
          right: 0px;
        }
      }
    }
  }

  .login-form {

    .field {
      display: block;
      background-color: rgb(209, 210, 211);
      border-radius: 5px;
      margin-bottom: 20px;

      label {
        display: none;
      }

      input {
        width: 100%;
        border: none;
        background-color: transparent;
        text-transform: uppercase;
        font-size: 20px;
        padding: 15px;
        box-sizing: border-box;
      }
    }

    .button-login {
      margin-bottom: 20px;
      button {
        background-color: rgb(253, 126, 0);
        border: none;
        border-radius: 5px;
        color: white;
        padding: 15px;
        width: 100%;
        font-size: 20px;
        text-transform: uppercase;
      }
    }

    .section-logion-option {
      display: flex;

      color: rgb(0, 45, 116);
    
      label {
        flex: 1;
      }

      a {
        text-decoration: none;
        color: unset;
      }
    }

  }
`;

export default () => {
  return <LoginStyled>
    <div className="block-login">
      <header>
        <div className="banner">
          <div className="brand">
            <h1>Verificar</h1>
          </div>
        </div>
      </header>
      <section className="login-form">
        <form action="#" method="post">
          <div className="field">
            <label htmlFor="username">Usuario</label>
            <input id="username" type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="******" />
          </div>
          <div className="button-login">
            <Link href="/inicio">
              <button type="submit">Iniciar sesión</button>
            </Link>
          </div>
          <div className="section-logion-option">
            <label htmlFor="remember">
              <input type="checkbox" name="remember" id="remember" />
              Recuerdame
            </label>
            <a href="#">Olvidaste tu contraseña?</a>
          </div>
        </form>
      </section>
    </div>
  </LoginStyled>
}
