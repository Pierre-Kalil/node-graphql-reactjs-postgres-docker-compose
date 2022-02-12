import { gql } from "@apollo/client";
import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Email inválido"),
  cpf: yup.string(),
});

export const CREATE_STUDENT = gql`
  mutation CreateStudent($cpf: String!, $name: String!, $email: String!) {
    createStudent(data: { cpf: $cpf, name: $name, email: $email }) {
      cpf
      name
      email
    }
  }
`;
