import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageService } from 'src/message/message.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema
      },
    ])
  ],
  providers: [UserResolver, UserService, MessageService]
})
export class UserModule {}
