import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { CreateUserInput } from './inputs/create-user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll() {
    try{
      const users = await this.userModel.find();
      return users;
    }
    catch (error) {
      return new Error(error.message)
    }
  }

  async createUser (createUserInput: CreateUserInput) {
    try{
        const user = new this.userModel(createUserInput);
        return user.save();
      }
      catch (error) {
        return new Error(error.message)
      }
  }
}