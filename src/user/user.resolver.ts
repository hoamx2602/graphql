import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';
import { UserService } from './user.service';
import { Message } from 'src/message/message.schema';
import { MessageService } from 'src/message/message.service';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
    private messageService: MessageService,
  ) {}
  @Query(() => [User])
  async getUsers() {
    return this.userService.findAll();
  }

  @ResolveField(() => Message)
  async messages(@Parent() message: Message) {
    return this.messageService.findById(message.receiverMail);
  }
}
