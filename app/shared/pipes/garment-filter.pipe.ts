import { Pipe, PipeTransform } from '@angular/core';
import { Garment } from '../../dto/garment';

@Pipe({name: 'garmentAttributeFilter'})
export class GarmentFilterPipe implements PipeTransform {
  transform(garments: Garment[], filter: {[key: string]: Array<String> }) {

      // filter = {gender: this.selectedGender, size: this.selectedSizes}
      // key = gender
      // filter[key] =  this.selectedGender []
      // item[key] = gender of garment
      console.log(filter);

      return garments.filter(item => {
         let notMatchingField = Object.keys(filter)
                                      .find(key =>
                                         !filter[key].includes(item[key])
                                      );
         return !notMatchingField; // true if matches all fields
      });

    }
}
