import { Component, inject, OnInit, signal } from '@angular/core';

import { ResultService } from '../../services/results';
import { Match } from '../../models/match';
import { ResultCard } from '../result-card/result-card';

@Component({
  selector: 'app-last-result',
  imports: [ResultCard],
  templateUrl: './last-result.html',
  styleUrl: './last-result.css',
})
export class LastResult implements OnInit {

  private resultService = inject(ResultService);

  lastResult = signal<Match | undefined>(undefined);

  ngOnInit() {
    this.resultService.getResults().subscribe((results) => {

      const lastResult = results
        .sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        )[0];

      this.lastResult.set(lastResult);
    });
  }
}