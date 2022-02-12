import styled from "styled-components";

export const ContainerDash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 50px;
    color: rgb(31, 96, 203, 100%);
  }
  h3 {
    color: rgba(248, 298, 211);
  }
  img {
    width: 250px;
    height: 250px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    img {
      width: 60%;
      height: 50%;
    }
  }
`;
