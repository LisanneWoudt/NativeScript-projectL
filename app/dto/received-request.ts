import { Garment } from './garment';

export class ReceivedRequest {
  id: number;
  garmentId: number;
  message: string;
  status: string;
  userId: number;
  received: boolean;
  receivedFromId: number;
  receivedFromUser: string;
  garmentInReturnId: number;
  garmentInReturnImage: any;
  garmentImage: any;
}
