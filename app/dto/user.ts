import { Garment } from './garment';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  garments: Garment[];
}
