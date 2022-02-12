import { gql, useQuery } from "@apollo/client";

const GET_STUDENT = gql`
  query GetStudent($cpf: String!) {
    student(cpf: $cpf) {
      cpf
      name
      email
    }
  }
`;

export const useStudent = (cpf: string) => {
  const { data, error, loading } = useQuery(GET_STUDENT, {
    variables: {
      cpf,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
