import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_STUDENT, schema } from "./schemas";
import { IStudent } from "./types";
import { ContainerForm } from "./styles";

export default function FormRegister() {
  const [studentData, setStudentData] = useState<IStudent>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IStudent>({
    resolver: yupResolver(schema),
  });

  const [createStudent] = useMutation(CREATE_STUDENT, {
    variables: {
      cpf: studentData?.cpf,
      name: studentData?.name,
      email: studentData?.email,
    },
  });

  const OnSubmitData: SubmitHandler<IStudent> = (dataStudent) => {
    setStudentData(dataStudent);
    createStudent();
    reset();
  };
  return (
    <>
      <ContainerForm>
        <form onClick={handleSubmit(OnSubmitData)}>
          <div className="header">
            <span>Cadastrar aluno</span>
          </div>
          <div className="inputs">
            <input
              type="text"
              {...register("cpf")}
              placeholder="Cpf xxxxxxxxxxx"
            />
            {errors.cpf?.message && <p>{errors.cpf?.message}</p>}
            <input type="text" {...register("name")} placeholder="Nome" />
            {errors.name?.message && <p>{errors.name?.message}</p>}
            <input type="text" {...register("email")} placeholder="Email" />
            {errors.email?.message && <p>{errors.email?.message}</p>}
            <input type="submit" value="Submit" />
          </div>
        </form>
      </ContainerForm>
    </>
  );
}
