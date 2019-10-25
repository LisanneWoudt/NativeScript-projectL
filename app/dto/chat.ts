import { Message } from './message';

export class Chat {
  id: number;
  receiverId: number;
  senderId: number;
  messages: Message[];
  lastMessage: Message = new Message();
}
