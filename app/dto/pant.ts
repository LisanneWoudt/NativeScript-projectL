import { Garment } from './garment';

export class Pant extends Garment {
  type: string;
  name: string;
  brand: string;
  userId: number;
  waistSize: number;
  waistLength: number;
}
