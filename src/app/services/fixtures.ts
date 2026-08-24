import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiMatch, ResultsResponse } from '../models/results-response';
import { Fixture } from '../models/fixture';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FixtureService {
  private http = inject(HttpClient);

  private apiUrl = '/api/v4/teams/66/matches';

  getFixtures(): Observable<Fixture[]> {
    const headers = new HttpHeaders({
      'X-Auth-Token': environment.apiToken,
    });

    return this.http.get<ResultsResponse>(this.apiUrl, { headers }).pipe(
      map((response) =>
        response.matches
          .filter((match) => match.status !== 'FINISHED')
          .map((match) => ({
            id: match.id,
            date: match.utcDate,
            opponent:
              match.homeTeam.id === 66
                ? match.awayTeam.name
                : match.homeTeam.name,
            venue: match.homeTeam.name,
            homeMatch: match.homeTeam.id === 66,
            opponentCrest: match.awayTeam.id === 66 ? match.homeTeam.crest : match.awayTeam.crest,
          })),
      ),
    );
  }
}
