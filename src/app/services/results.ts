import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Match } from '../models/match';
import { ResultsResponse } from '../models/results-response';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private http = inject(HttpClient);

  private apiUrl = '/api/v4/teams/66/matches';

  getResults(): Observable<Match[]> {
    const headers = new HttpHeaders({
      'X-Auth-Token': environment.apiToken,
    });

    return this.http.get<ResultsResponse>(this.apiUrl, { headers }).pipe(
      map((response) =>
        response.matches
          .filter((match) => match.status === 'FINISHED')
          .map((match) => ({
            id: match.id,
            date: match.utcDate,
            homeTeam: match.homeTeam.name,
            awayTeam: match.awayTeam.name,
            homeScore: match.score.fullTime.home ?? 0,
            awayScore: match.score.fullTime.away ?? 0,
            competition: match.competition.name,
          })),
      ),
    );
  }
}
