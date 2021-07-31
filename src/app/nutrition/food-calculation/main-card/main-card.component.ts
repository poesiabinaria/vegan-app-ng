import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent implements OnInit {
  @Input() totalPctgProteins!: number;
  @Input() totalPctgMinerals!: number;

  totalPctgAll = 0;

  ngOnChanges(changes: SimpleChange) {
    this.totalPctgAll = (this.totalPctgProteins + this.totalPctgMinerals) / 2;
  }

  constructor() {}

  ngOnInit(): void {}
}
