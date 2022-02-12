import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .scroll {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: scroll;

    margin-top: 30px;
  }
`;

export const CardStudent = styled.div`
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
