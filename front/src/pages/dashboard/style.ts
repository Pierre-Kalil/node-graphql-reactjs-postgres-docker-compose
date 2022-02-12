import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const HeaderPatient = styled.div`
  width: 250px;
  .boxnav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgb(31, 96, 203, 100%);
    color: rgba(248, 298, 241, 0.9);

    .nav {
      height: 70%;
      width: 100%;
      margin-left: 15px;
      overflow-x: hidden;
    }

    .nav ul li {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 10px 0;
      list-style: none;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      transition: 0.2s;
    }

    .nav ul li button {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px 0;
      background: transparent;
      border: 1px solid rgb(31, 96, 203, 100%);
      color: rgba(248, 298, 241, 0.9);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .nav ul li svg {
      width: 30px;
      height: 30px;
      margin: 0 10px;
      padding-left: 5px;
    }

    .nav ul li:hover {
      background: rgb(68, 196, 249, 100%);
      color: rgb(31, 96, 203, 100%);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .nav ul li button:hover {
      background: rgb(68, 196, 249, 100%);
      color: rgb(31, 96, 203, 100%);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 70px;
    overflow-x: hidden;
    .boxnav:hover {
      width: 100vw;
    }
    .title {
      display: none;
    }
    h1 {
      display: none;
    }
  }
`;

export const ContainerOutlet = styled.div`
  width: calc(100% - 250px);
  height: 100vh;
  background: rgb(68, 196, 249, 100%);

  @media only screen and (max-width: 768px) {
    width: calc(100% - 70px);
  }
`;
