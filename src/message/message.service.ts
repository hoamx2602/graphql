import { Injectable } from '@nestjs/common';
import { Message } from './message.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MessageService {
    constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}
    async findById (id: string) {
        return this.messageModel.findById(id);
    }
}
