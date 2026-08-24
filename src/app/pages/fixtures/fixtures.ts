import { Component, inject, OnInit, signal } from '@angular/core';
import { FixtureCard } from '../../components/fixture-card/fixture-card';
import { FixtureService } from '../../services/fixtures';
import { Fixture } from '../../models/fixture';

@Component({
  selector: 'app-fixtures',
  imports: [FixtureCard],
  templateUrl: './fixtures.html',
  styleUrl: './fixtures.css',
})
export class Fixtures implements OnInit {

  private fixtureService = inject(FixtureService);

  fixtures = signal<Fixture[]>([]);

  loading = signal(true);

  error = signal(false);

  ngOnInit() {
    this.fixtureService.getFixtures().subscribe({

      next: (data) => {
        this.fixtures.set(data);
        this.loading.set(false);
      },

      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },

    });
  }
}
