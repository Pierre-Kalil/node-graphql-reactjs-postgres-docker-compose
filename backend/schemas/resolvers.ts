import { Students } from "../entities/Students";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateStudentInput } from "../services/create.student";

@Resolver()
export class StudentResolver {
  @Query(() => [Students])
  students() {
    return Students.find();
  }

  @Query(() => Students)
  student(@Arg("cpf") cpf: string) {
    return Students.findOne({ where: { cpf } });
  }

  @Mutation(() => Students)
  async createStudent(@Arg("data") data: CreateStudentInput) {
    const student = Students.create(data);
    await student.save();
    return student;
  }
}
