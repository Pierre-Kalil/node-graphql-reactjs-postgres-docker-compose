import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% - 30px);
  height: 420px;
  border-radius: 5px 5px 0 0;
  background: rgba(248, 248, 251, 60%);

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100px;

    background: rgb(31, 96, 203, 80%);
    color: rgba(248, 298, 241, 0.9);
    border-radius: 5px 5px 0 0;

    img {
      width: 100px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  .inputs {
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      margin: 10px 0;
      padding: 10px;
      width: 100%;
      border: none;
      border-radius: 5px;
    }
    input[type="submit"] {
      background: rgb(68, 196, 249, 100%);
      border: none;
      cursor: pointer;
    }
    input[type="submit"]:hover {
      background: rgb(68, 196, 249, 80%);
      box-shadow: -1px 2px 8px 1px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
    }
  }

  a {
    text-decoration: none;
    color: rgba(85, 110, 230, 1);
  }

  @media only screen and (min-width: 425px) {
    width: 320px;
  }
`;
