import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Message } from 'src/message/message.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String)
  name: string;

  @Prop({ unique: true })
  @Field(() => String)
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
