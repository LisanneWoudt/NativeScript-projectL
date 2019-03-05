import { Garment } from './garment';

export class ReceivedRequest {
  id: number;
  garmentId: number;
  message: string;
  status: string;
  userId: number;
  statusUpdated: boolean;
  receivedFromId: number;
  receivedFromUser: string;
  garmentInReturnId: number;
  garmentInReturnImage: any;
  garmentImage: any;
}
