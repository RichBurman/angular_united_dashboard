import { Component, inject, OnInit, signal } from '@angular/core';

import { ResultService } from '../../services/results';
import { Match } from '../../models/match';

@Component({
  selector: 'app-season-form',
  imports: [],
  templateUrl: './season-form.html',
  styleUrl: './season-form.css',
})
export class SeasonForm implements OnInit {

  private resultService = inject(ResultService);

  results = signal<string[]>([]);

  ngOnInit() {
    this.resultService.getResults().subscribe((matches) => {

      const form = matches
        .sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime(),
        )
        .map((match) => this.getResult(match));

      this.results.set(form);
    });
  }

  private getResult(match: Match): string {

    if (match.homeScore === match.awayScore) {
      return 'DRAW';
    }

    const unitedWon =
      (match.homeTeam.includes('Manchester United') &&
        match.homeScore > match.awayScore) ||
      (match.awayTeam.includes('Manchester United') &&
        match.awayScore > match.homeScore);

    return unitedWon ? 'WIN' : 'LOSS';
  }
}