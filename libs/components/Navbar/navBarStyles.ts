import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  .notification-content {
    z-index: 100;
    position: relative;
    border: none;
    background: none;
    padding: 0px;
    margin: 0px;

    .notification-btn {
      border: none;
      padding: 0px;
      margin: 0px;
      background: none;
    }

    .notification-indicator {
      position: absolute;
      top: 0px;
      right: 0px;
      background: rgb(253, 254, 0);
      font-family: "Source Sans Pro", sans-serif;
      width: 20px;
      height: 20px;
      font-size: 14px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .notification-box {
    border-radius: 10px;
    position: absolute;
    width: 400px;
    background-color: rgb(254, 140, 9);
    right: -100px;
    top: 60px;
    box-shadow: 0px 3px 3px 0px #00000040;

    .list-detail {
      padding: 0px 20px;

      .item-content:last-child {
        border: none;
      }
    }

    .item-content {
      padding: 10px 20px;
      color: white;
      font-size: 14px;

      display: flex;
      border-bottom: solid 1px white;

      .text {
        flex: 1;
      }

      button {
        
      }
    }

    .header {
      background-color: rgb(208, 113, 1);
      border-radius: 10px;

      .text {
        text-transform: uppercase;
      }

      button {
        border: none;
        padding: 0px;
        padding: 0px;
        background: none;
        color: white;
        font-size: 14px;
      }
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 0px;
      height: 0px;
      top: -20px;
      right: 105px;
      border-top: solid 0px transparent;
      border-left: solid 15px transparent;
      border-right: solid 15px transparent;
      border-bottom: solid 20px rgb(208, 113, 1);
    }
  }
`;

export const SectionLeft = styled.div`
  padding: 5px 70px;
`;

export const SectionRigth = styled.div`
  padding-right: 40px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  & > * {
    margin: 0px 7px;
  }
`;

export const Background = styled.div`
background: linear-gradient(to left, #746e6e, #979694);
`;

export const ItemMenu = styled.div`
display: inline-block;
`;
