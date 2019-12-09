import styled from "styled-components";

const ContentImage = styled.div`
  background-color: white;
  .container-imagen {
    display: flex;
    justify-content: center;
  }
  img {
    height: 300px;
  }
`;

export const VehicleDamageIndiator = ({ }) => {
  return <ContentImage>
    <div className="container-imagen">
      <img src="/static/auto.svg" alt="" />
    </div>
  </ContentImage>;
}
