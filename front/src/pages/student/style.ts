import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  height: 60vh;

  input {
    margin: 10px 0;
    padding: 10px;
    width: 200px;
    border: none;
    border-radius: 5px;
    color: rgba(248, 298, 241, 0.9);
  }
  @media only screen and (min-width: 424px) {
    input {
      width: 300px;
    }
  }
`;

export const CardStundet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 200px;
  height: 180px;
  margin: 5px;
  border-radius: 5px;

  color: rgba(248, 298, 241, 0.9);
  background: rgb(31, 96, 203, 100%);

  span {
    font-weight: bold;
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
`;
