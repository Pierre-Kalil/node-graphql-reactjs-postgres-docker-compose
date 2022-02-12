import { useState } from "react";
import { useStudent } from "../../hooks/getStudent";
import { CardStundet, ContainerMain } from "./style";

export const Student = () => {
  const [search, setSearch] = useState("");
  const { data } = useStudent(search as string);
  return (
    <>
      <ContainerMain>
        <h1>Pesquisar aluno</h1>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="CPF do aluno"
        />
        {data?.student.name !== "" ? (
          <CardStundet>
            <span>Nome</span>
            <p>{data?.student.name}</p>
            <span>CPF</span>
            <p>{data?.student.email}</p>
            <span>Email</span>
            <p>{data?.student.cpf}</p>
          </CardStundet>
        ) : (
          <></>
        )}
      </ContainerMain>
    </>
  );
};
