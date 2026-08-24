import { Component, input } from '@angular/core';
import { Match } from '../../models/match';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-result-card',
  imports: [DatePipe],
  templateUrl: './result-card.html',
  styleUrl: './result-card.css',
})
export class ResultCard {
  match = input.required<Match>();
}
