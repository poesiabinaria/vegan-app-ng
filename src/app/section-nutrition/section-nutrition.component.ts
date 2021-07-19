import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { FOODS } from '../mock-foods';
import { USERDATA } from '../user-profile';

@Component({
  selector: 'app-section-nutrition',
  templateUrl: './section-nutrition.component.html',
  styleUrls: ['./section-nutrition.component.scss'],
})
export class SectionNutritionComponent implements OnInit {
  foodsDB = FOODS;
  userData = USERDATA;

  totalPctgProteins = 0;
  totalPctgMinerals = 0;

  setTotalPctgProteins(value: number) {
    this.totalPctgProteins = value;
  }
  setTotalPctgMinerals(value: number) {
    this.totalPctgMinerals = value;
  }

  calculateNeeds(weight: number, gender: string) {
    const isWoman: boolean = gender == 'F' ? true : false;

    const values: object = {
      // [0] necessidade, [1] somatório

      calories: { calories: [30 * weight, 0] },

      minerals: {
        iron: [isWoman ? 16.6 : 8.4, 0],
        zinc: [isWoman ? 12 : 16.5, 0],
        calcium: [500, 0],
      },
      vitamins: { vA: [isWoman ? 700 : 900, 0], vB: 200 },
      fats: {
        mono: [0, 0],
        o3: [isWoman ? 2.2 : 3.2, 0],
        o6: [isWoman ? 12 : 17, 0],
        trans: [0, 0],
      },
      proteins: {
        //proteins: [0.8 * weight, 0],
        fenilalanina: [33 * weight, 0],
        histidina: [14 * weight, 0],
        isoleucina: [19 * weight, 0],
        leucina: [42 * weight, 0],
        lisina: [38 * weight, 0],
        metionina: [19 * weight, 0],
        treonina: [20 * weight, 0],
        triptofano: [5 * weight, 0],
        valina: [24 * weight, 0],
      },

      carbohydrates: { carbohydrates: [0, 0] },

      // vC: [isWoman ? 90 : 900, 0],
      // vE: [15 , 0],
      // vK: [isWoman ? 90 : 120, 0],
      // vB1: [isWoman ? 1.1 : 1.2, 0],
      // vB2: [isWoman ? 1.1 : 1.3, 0],
      // vB3: [isWoman ? 14 : 16, 0],
      // vB5: [5, 0],
      // vB6: [1.3, 0],
      // vB7: [30, 0],
      // vB9: [400, 0],

      // proteins: [0.8 * weight, 0],
    };

    this.userData.values = values;
  }

  constructor() {}

  ngOnInit(): void {
    this.calculateNeeds(27, 'F');
    console.log(this.userData);
  }
}
