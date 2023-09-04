import { Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  message: string;

  @Prop()
  senderMail: string;

  @Prop()
  receiverMail: string;

  @Prop()
  timestamps: number;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
