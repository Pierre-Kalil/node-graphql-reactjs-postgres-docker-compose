import { IStudent } from "../../components/FormRegister/types";
import { useStudents } from "../../hooks/getAllStudents";
import { CardStudent, ContainerCard } from "./style";

export const AllStudents = () => {
  const { data } = useStudents();
  return (
    <>
      <ContainerCard>
        <h1>Todos os Alunos</h1>
        <div className="scroll">
          {data &&
            data.students.map((item: IStudent, index: number) => {
              return (
                <CardStudent key={index}>
                  <span>Nome</span>
                  <p>{item.name}</p>
                  <span>CPF</span>
                  <p>{item.cpf}</p>
                  <span>Email</span>
                  <p>{item.email}</p>
                </CardStudent>
              );
            })}
        </div>
      </ContainerCard>
    </>
  );
};
