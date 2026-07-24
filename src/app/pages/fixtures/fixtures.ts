import { Component } from '@angular/core';
import { FixtureCard } from '../../components/fixture-card/fixture-card';
import { fixtures } from '../../data/fixtures'

@Component({
  selector: 'app-fixtures',
  imports: [FixtureCard],
  templateUrl: './fixtures.html',
  styleUrl: './fixtures.css',
})
export class Fixtures {
  fixtures = fixtures;
}
