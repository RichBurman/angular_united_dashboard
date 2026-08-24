import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FixtureService } from '../../services/fixtures';
import { Fixture } from '../../models/fixture';

@Component({
  selector: 'app-next-match',
  imports: [DatePipe],
  templateUrl: './next-match.html',
  styleUrl: './next-match.css',
})
export class NextMatch implements OnInit {

  private fixtureService = inject(FixtureService);

  nextFixture = signal<Fixture | undefined>(undefined);

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