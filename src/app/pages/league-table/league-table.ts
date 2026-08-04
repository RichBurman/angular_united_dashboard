import { Component, inject } from '@angular/core';
import { LeagueService } from '../../services/league';

@Component({
  selector: 'app-league-table',
  imports: [],
  templateUrl: './league-table.html',
  styleUrl: './league-table.css',
})
export class LeagueTable {

    private leagueService = inject(LeagueService);

    constructor() {
      this.leagueService.getLeagueTable().subscribe((data) => {
        console.log(data);
      })
    }
}
