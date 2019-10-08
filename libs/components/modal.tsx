import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

type ModalProps = PropsWithChildren<{
  className?: string;
  backgroundColor?: string;
}>;

const ModalContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${(props: ModalProps) => props.backgroundColor ? props.backgroundColor : `rgba(130, 130, 130, 0.94)`};
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .block-content {
    padding: 20px;
    max-width: 800px;

    /* Content */

    font-family: "Source Sans Pro", sans-serif;

    .title {
      margin-bottom: 10px;
      display: flex;
      justify-content: left;
      align-items: center;

      h1 {
        color: white; 
        text-transform: uppercase;
        font-size: 30px;

        .icon {
          --w: 30px;
          width: var(--w);
          height: var(--w);
        }
      }
    }

    .comment {
      padding: 20px;
      background: #e6e6e6f0;
      border-radius: 4px;
      overflow: auto;
      max-height: 400px;
      margin-bottom: 10px;
    }

    .control-btns {
      text-align: right;

      & > button {
        border: none;
        color: white;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 20px;
        text-transform: uppercase;

        margin-right: 10px;
        &:last-child {
          margin-right: 0px;
        }

        &:hover {
          box-shadow: 0px 0px 0px 5px black;
        }

        &, &.bg-orange {
          background-color: rgb(250, 127, 1);
        }

        &.bg-orange-light {
          background-color: rgb(251,156,6);
        }

        &.bg-red {
          background-color: rgb(209,8,7);
        }
      }
    }
  }
`;

const Modal: FunctionComponent<ModalProps> = ({ children, ...props }: ModalProps) => <ModalContainer {...props}>
  <div className="block-content">
    {children}
  </div>
</ModalContainer>

export default Modal;
