import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity("students")
export class Students extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  cpf!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column({ unique: true })
  email!: string;
}
