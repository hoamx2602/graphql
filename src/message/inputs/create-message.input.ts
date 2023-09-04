import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateMessageInput {
  @Field()
  message: string;

  @Field()
  senderMail: string;

  @Field()
  receiverMail: string;

  @Field(() => Int)
  timestamps: number;
}