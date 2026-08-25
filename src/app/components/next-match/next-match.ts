import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FixtureService } from '../../services/fixtures';
import { Fixture } from '../../models/fixture';
import { SeasonForm } from '../season-form/season-form';

@Component({
  selector: 'app-next-match',
  imports: [DatePipe, SeasonForm],
  templateUrl: './next-match.html',
  styleUrl: './next-match.css',
})
export class NextMatch implements OnInit {

  private fixtureService = inject(FixtureService);

  nextFixture = signal<Fixture | undefined>(undefined);

  daysUntilMatch = computed(() => {
    const fixture = this.nextFixture();

    if (!fixture) {
      return null;
    }

    const today = new Date();
    const matchDate = new Date(fixture.date);
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOfMatchDay = new Date(matchDate.getFullYear(), matchDate.getMonth(), matchDate.getDate());

    return Math.round(
      (startOfMatchDay.getTime() - startOfToday.getTime()) / 86_400_000,
    );
  });

  ngOnInit() {
    this.fixtureService.getFixtures().subscribe((fixtures) => {

      const nextFixture = fixtures
        .filter((fixture) => new Date(fixture.date) > new Date())
        .sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime(),
        )[0];

      this.nextFixture.set(nextFixture);
    });
  }
}