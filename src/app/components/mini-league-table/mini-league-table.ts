import { Component, inject, OnInit, signal } from '@angular/core';

import { LeagueService } from '../../services/league';
import { TeamStanding } from '../../models/league-table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-league-table',
  imports: [RouterLink],
  templateUrl: './mini-league-table.html',
  styleUrl: './mini-league-table.css',
})
export class MiniLeagueTable implements OnInit {
  private leagueService = inject(LeagueService);

  teams = signal<TeamStanding[]>([]);

  ngOnInit() {
    this.leagueService.getLeagueTable().subscribe((response) => {
      const table = response.standings[0]?.table ?? [];

      this.teams.set(this.getRelevantTeams(table));
    });
  }

  private getRelevantTeams(table: TeamStanding[]): TeamStanding[] {
    const visibleTeamCount = 9;
    const unitedIndex = table.findIndex((team) => team.team.id === 66);

    if (unitedIndex === -1) {
      return table.slice(0, visibleTeamCount);
    }

    let start = unitedIndex - Math.floor(visibleTeamCount / 2);

    if (start < 0) {
      start = 0;
    }

    if (start + visibleTeamCount > table.length) {
      start = Math.max(0, table.length - visibleTeamCount);
    }

    return table.slice(start, start + visibleTeamCount);
  }
}
