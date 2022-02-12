import { InputType, Field } from "type-graphql";

@InputType()
export class CreateStudentInput {
  @Field()
  cpf!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;
}
