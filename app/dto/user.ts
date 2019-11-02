import { Garment } from './garment';
import { SwapRequest } from './swap-request';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  garments: Garment[];
  swapRequests: SwapRequest[];
}
