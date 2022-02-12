import { ContainerMain, ContainerOutlet, HeaderPatient } from "./style";
import { FaHome } from "react-icons/fa";
import { MdOutlineEmojiPeople, MdPeople } from "react-icons/md";
import { ImFloppyDisk } from "react-icons/im";
import { Outlet } from "react-router-dom";
import { AllStudents } from "../allStudents";
import { useState } from "react";
import { Student } from "../student";
import { Register } from "../register";
import { DashboardOutlet } from "../../components/DashboardOutlet";

export const Dashboard = () => {
  const [allStudent, setAllStudents] = useState(false);
  const [student, setStudents] = useState(false);
  const [register, setRegister] = useState(false);
  const [dash, setDash] = useState(true);

  const handleAllStudents = () => {
    setStudents(false);
    setRegister(false);
    setDash(false);
    setAllStudents(true);
  };
  const handleStudents = () => {
    setAllStudents(false);
    setRegister(false);
    setDash(false);
    setStudents(true);
  };
  const handleRegister = () => {
    setStudents(false);
    setAllStudents(false);
    setDash(false);
    setRegister(true);
  };
  const hanldeDash = () => {
    setAllStudents(false);
    setStudents(false);
    setRegister(false);
    setDash(true);
  };

  return (
    <ContainerMain>
      <HeaderPatient>
        <div className="boxnav">
          <h1>School X</h1>
          <nav className="nav">
            <ul>
              <li>
                <button onClick={handleStudents}>
                  <MdOutlineEmojiPeople />
                  <span className="title">Pesquisar aluno</span>
                </button>
              </li>
              <li>
                <button onClick={handleAllStudents}>
                  <MdPeople />
                  <span className="title">Todos os alunos</span>
                </button>
              </li>
              <li>
                <button onClick={handleRegister}>
                  <ImFloppyDisk />
                  <span className="title">Cadastrar aluno</span>
                </button>
              </li>
              <li>
                <button onClick={hanldeDash}>
                  <FaHome />
                  <span className="title">Home</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderPatient>
      <ContainerOutlet>
        {dash === true ? <DashboardOutlet /> : <></>}
        {allStudent === true ? <AllStudents /> : <></>}
        {student === true ? <Student /> : <></>}
        {register === true ? <Register /> : <></>}
        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
