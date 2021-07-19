import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nutrient-card',
  templateUrl: './nutrient-card.component.html',
  styleUrls: ['./nutrient-card.component.scss'],
})
export class NutrientCardComponent implements OnInit {
  @Input() userDataNutrient: any;
  @Input() cardTitle?: string;
  @Input() hexColor?: string;

  //@Input() totalPctg!: number;
  @Output() totalPctgItem = new EventEmitter<number>(true);

  totalPctg: number = 0;

  // customOptions: OwlOptions = {
  //   loop: true,
  //   autoplay: true,
  //   mouseDrag: true,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   rewind: false,
  //   autoplaySpeed: 500,
  //   navText: ['234', '234'],
  //   items: 2,
  // };

  slideConfig = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  objectKeys = Object.keys;

  getValues() {
    return Object.values(this.userDataNutrient);
  }

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];

  getTotalPctg(userDataNutrient: any): number {
    const nutrientValues: any = Object.values(userDataNutrient);

    const sum = nutrientValues.reduce((total: number, value: any) => {
      let dailyNeed = value[0];
      let achievedNeed = value[1];

      let pctg = Math.round((achievedNeed / dailyNeed) * 100);
      return total + (pctg >= 100 ? 100 : pctg);
    }, 0);

    const totalPctg = Math.floor(sum / nutrientValues.length);

    return totalPctg;
  }

  constructor(config: NgbCarouselConfig) {
    config.interval = 500;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userDataNutrient) {
      this.totalPctg = this.getTotalPctg(this.userDataNutrient);
      this.totalPctgItem.emit(this.totalPctg);
    }
  }

  ngOnInit(): void {}
}
