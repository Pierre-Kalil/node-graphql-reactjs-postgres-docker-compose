import { useQuery, gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query {
    students {
      cpf
      name
      email
    }
  }
`;

export const useStudents = () => {
  const { error, loading, data } = useQuery(GET_STUDENTS);

  return {
    error,
    loading,
    data,
  };
};
