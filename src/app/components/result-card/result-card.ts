import { Component, computed, input } from '@angular/core';
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

  result = computed(() => {
    const match = this.match();

    if (match.homeTeamId === 66) {
      if (match.homeScore > match.awayScore) {
        return 'WIN';
      }

      if (match.homeScore < match.awayScore) {
        return 'LOSS';
      }

      return 'DRAW';
    }

    if (match.awayScore > match.homeScore) {
      return 'WIN';
    }

    if (match.awayScore < match.homeScore) {
      return 'LOSS';
    }

    return 'DRAW';
  });
}
