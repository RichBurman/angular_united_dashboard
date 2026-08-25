import { Component, inject, OnInit, signal } from '@angular/core';
import { FixtureCard } from '../../components/fixture-card/fixture-card';
import { FixtureService } from '../../services/fixtures';
import { Fixture } from '../../models/fixture';
import { ResultCard } from '../../components/result-card/result-card';
import { ResultService } from '../../services/results';
import { Match } from '../../models/match';

@Component({
  selector: 'app-fixtures',
  imports: [FixtureCard, ResultCard],
  templateUrl: './fixtures.html',
  styleUrl: './fixtures.css',
})
export class Fixtures implements OnInit {

  private fixtureService = inject(FixtureService);
  private resultService = inject(ResultService);

  fixtures = signal<Fixture[]>([]);
  results = signal<Match[]>([]);

  fixturesLoading = signal(true);
  resultsLoading = signal(true);

  fixturesError = signal(false);
  resultsError = signal(false);

  ngOnInit() {
    this.fixtureService.getFixtures().subscribe({

      next: (data) => {
        this.fixtures.set(data);
        this.fixturesLoading.set(false);
      },

      error: () => {
        this.fixturesError.set(true);
        this.fixturesLoading.set(false);
      },

    });

    this.resultService.getResults().subscribe({
      next: (data) => {
        this.results.set(data);
        this.resultsLoading.set(false);
      },
      error: () => {
        this.resultsError.set(true);
        this.resultsLoading.set(false);
      },
    });
  }
}
