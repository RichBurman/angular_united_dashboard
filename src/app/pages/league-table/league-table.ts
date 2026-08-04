import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LeagueService } from '../../services/league';
import { LeagueTableResponse } from '../../models/league-table';

@Component({
  selector: 'app-league-table',
  imports: [CommonModule],
  templateUrl: './league-table.html',
  styleUrl: './league-table.css',
})
export class LeagueTable {
  private leagueService = inject(LeagueService);

  standings: LeagueTableResponse['standings'] = [];

  constructor() {
    this.leagueService.getLeagueTable().subscribe((data) => {
      this.standings = data.standings;
    });
  }
}
