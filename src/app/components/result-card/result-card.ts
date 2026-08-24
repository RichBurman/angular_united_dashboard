import { Component, input } from '@angular/core';
import { Match } from '../../models/match';

@Component({
  selector: 'app-result-card',
  imports: [],
  templateUrl: './result-card.html',
  styleUrl: './result-card.css',
})
export class ResultCard {
  match = input.required<Match>();
}
