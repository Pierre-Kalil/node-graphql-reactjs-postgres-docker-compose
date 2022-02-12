import { ContainerDash } from "./style";
import welcome from "../../assets/welcome.svg";

export const DashboardOutlet = () => {
  return (
    <ContainerDash>
      <div>
        <h1>Bem vindo</h1>
        <h3>Encontre e cadastre alunos</h3>
        <h3>Simples, rápido e fácil</h3>
      </div>
      <img src={welcome} alt="imageWelcome" />
    </ContainerDash>
  );
};
