import { Pipe, PipeTransform } from '@angular/core';
import { Garment } from '../../dto/garment';

@Pipe({name: 'garmentAttributeFilter'})
export class GarmentFilterPipe implements PipeTransform {
  transform(garments: Garment[], filter: {[key: string]: any }) {

      return garments.filter(item => {
         let notMatchingField = Object.keys(filter)
                                      .find(key =>
                                        item[key] !== filter[key]);
         return !notMatchingField; // true if matches all fields
      });
    }
}
