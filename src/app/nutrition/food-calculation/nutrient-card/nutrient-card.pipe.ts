import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'nutrientPctg',
})
export class NutrientPctgPipe implements PipeTransform {
  @Input() userDataNutrient: any;

  transform(values: any): number {
    let dailyNeed = values[0];
    let achievedNeed = values[1];

    return Math.round((achievedNeed / dailyNeed) * 100);
  }
}
