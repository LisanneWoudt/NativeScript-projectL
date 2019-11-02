import { Garment } from './garment';
import { SwapRequest } from './swap-request';
import { Chat } from './chat';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  garments: Garment[];
  swapRequests: SwapRequest[];
  chats: Chat[];
}
